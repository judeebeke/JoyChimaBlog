import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Joy Chima All Posts | Joy Chima Blog',
    description: 'More and more content form the most informative Blog on the Internet!',
    generator: 'GraphCMS',
    applicationName: 'Joy Chima Blog',
    referrer: 'origin-when-cross-origin',
    keywords: ['Blogging', 'Next.js', 'React', 'JavaScript', 'About Joy Chima Blog'],
    authors: [{ name: 'Joy Chima' }, { name: 'Jude', url: 'https://ebekesjude.verce.app' }],
  }

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }