import { ExperienceNode } from './ExperienceNode'
import { ConnectionPath } from './ConnectionPath'
import type { ExperienceNodeData } from '@/types/leadership.types'

interface LeadershipNetworkProps {
  nodes: ExperienceNodeData[]
}

/**
 * Lays out nodes in a 3-column network grid.
 * Between each row, renders animated connection paths.
 *
 * Row 0: Future Tech Club | Micro Club       | World Learning
 * Row 1: AI Forge Journey | AI Forge Mentor  | Hackathon
 * Row 2: Algérie Télécom  | Satellite        | (empty)
 */
export function LeadershipNetwork({ nodes }: LeadershipNetworkProps) {
  // Group into rows
  const rows: ExperienceNodeData[][] = []
  for (const node of nodes) {
    if (!rows[node.row]) rows[node.row] = []
    rows[node.row][node.col] = node
  }

  // Connection accents between rows
  const rowConnections: Array<'yellow' | 'blue'> = ['yellow', 'blue']

  return (
    <div className="flex flex-col gap-0">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {/* Node row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((col) => {
              const node = row[col]
              if (!node) {
                // Empty cell — keeps grid spacing intact
                return <div key={col} className="hidden md:block" />
              }
              return (
                <ExperienceNode
                  key={node.id}
                  node={node}
                  delay={rowIndex * 0.1 + col * 0.08}
                />
              )
            })}
          </div>

          {/* Connection paths between rows */}
          {rowIndex < rows.length - 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-1">
              {[0, 1, 2].map((col) => {
                const hasNode     = !!row[col]
                const hasNextNode = !!(rows[rowIndex + 1]?.[col])
                if (!hasNode || !hasNextNode) return <div key={col} />

                const accent = rowConnections[rowIndex % rowConnections.length]
                const dirs: Array<'horizontal' | 'diagonal-down' | 'diagonal-up'> = [
                  'diagonal-down',
                  'horizontal',
                  'diagonal-up',
                ]
                return (
                  <ConnectionPath
                    key={col}
                    direction={dirs[col % 3]}
                    accent={accent}
                    delay={rowIndex * 0.15 + col * 0.08}
                  />
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
