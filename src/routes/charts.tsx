import { createFileRoute, useRouter } from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import { getDailyWordCounts } from "../server/services/diaryService"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AppLayout } from "@/components/app-layout"
import { SidebarTrigger } from "@/components/ui/sidebar"

export const Route = createFileRoute("/charts")({
  component: ChartsPage,
})

function ChartsPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  const getWordCounts = useServerFn(getDailyWordCounts)
  const { data, isLoading, error } = useQuery({
    queryKey: ["getDailyWordCounts"],
    queryFn: () => getWordCounts(),
    enabled: isClient,
  })

  useEffect(() => {
    setIsClient(true)
  }, [router])

  if (!isClient) {
    return null
  }

  const chartData = data?.code === 0 ? data.data : []

  return (
    <AppLayout>
      <div className="min-h-screen">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">Writing Statistics</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {isLoading && (
            <div className="text-center py-8 text-muted-foreground">
              Loading chart data...
            </div>
          )}

          {error && (
            <div className="text-center py-8 text-red-500">
              Error loading chart data. Please try again.
            </div>
          )}

          {!isLoading && !error && (
            <Card>
              <CardHeader>
                <CardTitle>Daily Word Count</CardTitle>
                <CardDescription>
                  Track your writing progress over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                {chartData.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No data available yet. Start writing to see your statistics!
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const date = new Date(value)
                          return `${date.getMonth() + 1}/${date.getDate()}`
                        }}
                      />
                      <YAxis />
                      <Tooltip
                        labelFormatter={(value) => {
                          const date = new Date(value)
                          return date.toLocaleDateString()
                        }}
                        formatter={(value: number) => [value, "Words"]}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="words"
                        stroke="#8884d8"
                        strokeWidth={2}
                        name="Words"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </AppLayout>
  )
}
