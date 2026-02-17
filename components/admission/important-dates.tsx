const dates = [
  { event: "Application Opens", date: "March 1, 2026" },
  { event: "Early Decision Deadline", date: "April 15, 2026" },
  { event: "Portfolio Submission Deadline", date: "May 1, 2026" },
  { event: "Regular Decision Deadline", date: "June 1, 2026" },
  { event: "Acceptance Letters Sent", date: "June 20, 2026" },
  { event: "Enrollment Confirmation", date: "July 15, 2026" },
  { event: "Orientation Week", date: "August 25, 2026" },
]

export function ImportantDates() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-secondary-foreground md:text-4xl mb-10">
          Important Dates
        </h2>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-5 py-3 font-heading text-sm font-semibold text-card-foreground">
                  Event
                </th>
                <th className="px-5 py-3 text-right font-heading text-sm font-semibold text-card-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, i) => (
                <tr
                  key={item.event}
                  className={i < dates.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-5 py-3.5 text-sm text-card-foreground">
                    {item.event}
                  </td>
                  <td className="px-5 py-3.5 text-right text-sm font-semibold text-primary">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
