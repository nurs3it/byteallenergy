import Image from 'next/image'

interface Block {
  id?: string
  type: string
  data: Record<string, unknown>
}

interface EditorJsData {
  time?: number
  version?: string
  blocks: Block[]
}

function parseContent(content: string | null | undefined): EditorJsData | null {
  if (!content) return null
  try {
    const parsed = JSON.parse(content)
    if (parsed && Array.isArray(parsed.blocks)) return parsed
    return null
  } catch {
    return null
  }
}

function ParagraphBlock({ data }: { data: Record<string, unknown> }) {
  const text = (data.text as string) ?? ''
  const alignment = (data.alignment as string) ?? 'left'
  const alignClass = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : ''
  return (
    <p
      className={`text-foreground/90 leading-[1.8] text-base md:text-[17px] mb-5 ${alignClass}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

function HeaderBlock({ data }: { data: Record<string, unknown> }) {
  const text = (data.text as string) ?? ''
  const level = (data.level as number) ?? 2
  const classes = 'font-bold text-foreground mt-10 mb-4 leading-tight pb-2 border-b border-border'
  const sizes: Record<number, string> = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  }
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  return (
    <Tag
      className={`${classes} ${sizes[level] ?? 'text-2xl'}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

function ListBlock({ data }: { data: Record<string, unknown> }) {
  const items = (data.items as string[]) ?? []
  const style = (data.style as string) ?? 'unordered'
  const itemClass = 'mb-1 leading-relaxed'
  if (style === 'ordered') {
    return (
      <ol className="list-decimal list-outside pl-6 mb-6 space-y-1 text-base md:text-lg">
        {items.map((item, i) => (
          <li key={i} className={itemClass} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ol>
    )
  }
  return (
    <ul className="list-disc list-outside pl-6 mb-6 space-y-1 text-base md:text-lg">
      {items.map((item, i) => (
        <li key={i} className={itemClass} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  )
}

function ChecklistBlock({ data }: { data: Record<string, unknown> }) {
  const items = (data.items as { text: string; checked: boolean }[]) ?? []
  return (
    <ul className="mb-6 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 ${item.checked ? 'bg-primary border-primary' : 'border-border'}`}>
            {item.checked && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span
            className={`text-base leading-relaxed ${item.checked ? 'line-through text-muted-foreground' : 'text-foreground'}`}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </li>
      ))}
    </ul>
  )
}

function QuoteBlock({ data }: { data: Record<string, unknown> }) {
  const text = (data.text as string) ?? ''
  const caption = (data.caption as string) ?? ''
  const alignment = (data.alignment as string) ?? 'left'
  return (
    <blockquote className={`my-8 border-l-4 border-primary pl-6 py-2 ${alignment === 'center' ? 'text-center border-l-0 border-t-4 pt-6 pl-0' : ''}`}>
      <p
        className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-2"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {caption && (
        <cite className="text-sm text-muted-foreground not-italic font-medium" dangerouslySetInnerHTML={{ __html: caption }} />
      )}
    </blockquote>
  )
}

function CodeBlock({ data }: { data: Record<string, unknown> }) {
  const code = (data.code as string) ?? ''
  return (
    <pre className="my-6 rounded-sm bg-card dark:bg-card text-card-foreground p-6 overflow-x-auto text-sm leading-relaxed font-mono border border-border">
      <code>{code}</code>
    </pre>
  )
}

function RawBlock({ data }: { data: Record<string, unknown> }) {
  const html = (data.html as string) ?? ''
  return <div className="my-6" dangerouslySetInnerHTML={{ __html: html }} />
}

function ImageBlock({ data }: { data: Record<string, unknown> }) {
  const file = data.file as { url?: string } | undefined
  const url = (file?.url ?? data.url ?? '') as string
  const caption = (data.caption as string) ?? ''
  const withBorder = data.withBorder as boolean
  const withBackground = data.withBackground as boolean
  const stretched = data.stretched as boolean

  if (!url) return null

  return (
    <figure className={`my-8 ${stretched ? 'w-full' : 'max-w-2xl mx-auto'}`}>
      <div className={`relative overflow-hidden rounded-xl ${withBackground ? 'bg-muted p-4' : ''} ${withBorder ? 'border-2 border-border' : ''}`}>
        <Image
          src={url}
          alt={caption || 'Article image'}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg object-cover"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-center text-sm text-muted-foreground italic"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  )
}

function TableBlock({ data }: { data: Record<string, unknown> }) {
  const content = (data.content as string[][]) ?? []
  const withHeadings = data.withHeadings as boolean
  if (content.length === 0) return null
  const rows = withHeadings ? content.slice(1) : content
  const headers = withHeadings ? content[0] : null

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        {headers && (
          <thead className="bg-muted text-foreground">
            <tr>
              {headers.map((cell, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold" dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 border-t border-border" dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DelimiterBlock() {
  return (
    <div className="my-10 flex items-center justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-primary/60" />
      ))}
    </div>
  )
}

function WarningBlock({ data }: { data: Record<string, unknown> }) {
  const title = (data.title as string) ?? ''
  const message = (data.message as string) ?? ''
  return (
    <div className="my-6 flex gap-4 p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
      <span className="text-2xl flex-shrink-0">⚠️</span>
      <div>
        {title && <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">{title}</p>}
        <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  )
}

function EmbedBlock({ data }: { data: Record<string, unknown> }) {
  const embed = (data.embed as string) ?? ''
  const caption = (data.caption as string) ?? ''
  const width = (data.width as number) ?? 580
  const height = (data.height as number) ?? 320
  if (!embed) return null
  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-xl border border-border bg-muted" style={{ paddingBottom: `${(height / width) * 100}%` }}>
        <iframe
          src={embed}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">{caption}</figcaption>
      )}
    </figure>
  )
}

function LinkToolBlock({ data }: { data: Record<string, unknown> }) {
  const link = (data.link as string) ?? ''
  const meta = data.meta as { title?: string; description?: string; image?: { url?: string } } | undefined
  if (!link) return null
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group block"
    >
      {meta?.image?.url && (
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image src={meta.image.url} alt={meta?.title ?? ''} fill className="object-cover" unoptimized />
        </div>
      )}
      <div className="min-w-0">
        {meta?.title && <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">{meta.title}</p>}
        {meta?.description && <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{meta.description}</p>}
        <p className="text-xs text-primary truncate">{link}</p>
      </div>
    </a>
  )
}

function renderBlock(block: Block) {
  switch (block.type) {
    case 'paragraph': return <ParagraphBlock key={block.id} data={block.data} />
    case 'header': return <HeaderBlock key={block.id} data={block.data} />
    case 'list': return <ListBlock key={block.id} data={block.data} />
    case 'nestedList': return <ListBlock key={block.id} data={block.data} />
    case 'checklist': return <ChecklistBlock key={block.id} data={block.data} />
    case 'quote': return <QuoteBlock key={block.id} data={block.data} />
    case 'code': return <CodeBlock key={block.id} data={block.data} />
    case 'raw': return <RawBlock key={block.id} data={block.data} />
    case 'image': return <ImageBlock key={block.id} data={block.data} />
    case 'table': return <TableBlock key={block.id} data={block.data} />
    case 'delimiter': return <DelimiterBlock key={block.id} />
    case 'warning': return <WarningBlock key={block.id} data={block.data} />
    case 'embed': return <EmbedBlock key={block.id} data={block.data} />
    case 'linkTool': return <LinkToolBlock key={block.id} data={block.data} />
    default: return null
  }
}

interface Props {
  content: string | null | undefined
}

export function EditorJsContent({ content }: Props) {
  const editorData = parseContent(content)

  // Fallback: render as HTML if not Editor.js JSON
  if (!editorData) {
    if (!content) return null
    return (
      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  return (
    <div className="editorjs-content [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80 [&_mark]:bg-yellow-200 dark:[&_mark]:bg-yellow-500/30 [&_b]:font-bold [&_i]:italic">
      {editorData.blocks.map((block) => renderBlock(block))}
    </div>
  )
}
