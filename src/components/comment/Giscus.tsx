import { useEffect, useRef } from 'react'

interface GiscusProps {
  repo: string
  repoId: string
  category: string
  categoryId: string
  mapping?: string
  strict?: string
  reactionsEnabled?: string
  emitMetadata?: string
  inputPosition?: string
  lang?: string
  loading?: string
}

export function Giscus({
  repo,
  repoId,
  category,
  categoryId,
  mapping = 'pathname',
  strict = '0',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'top',
  lang = 'zh-CN',
  loading = 'lazy',
}: GiscusProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current

    if (!container) {
      return
    }

    container.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repoId)
    script.setAttribute('data-category', category)
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', mapping)
    script.setAttribute('data-strict', strict)
    script.setAttribute('data-reactions-enabled', reactionsEnabled)
    script.setAttribute('data-emit-metadata', emitMetadata)
    script.setAttribute('data-input-position', inputPosition)
    script.setAttribute('data-theme', 'preferred_color_scheme')
    script.setAttribute('data-lang', lang)
    script.setAttribute('data-loading', loading)

    container.appendChild(script)

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    strict,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    lang,
    loading,
  ])

  return <div ref={ref}></div>
}