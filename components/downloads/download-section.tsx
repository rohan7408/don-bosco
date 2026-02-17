import { FileText, Download } from "lucide-react"

interface FileItem {
  name: string
  type: string
  size: string
}

interface DownloadSectionProps {
  title: string
  files: FileItem[]
}

export function DownloadSection({ title, files }: DownloadSectionProps) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {file.type} &middot; {file.size}
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Download className="h-3.5 w-3.5" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
