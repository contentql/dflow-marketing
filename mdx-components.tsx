// Assume you're using Fumadocs UI
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import defaultComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import AWS from '@/app/(docs)/components/ui/SVG/AWS'
import Azure from '@/app/(docs)/components/ui/SVG/Azure'
import DigitalOcean from '@/app/(docs)/components/ui/SVG/DigitalOcean'
import GCP from '@/app/(docs)/components/ui/SVG/GoogleCloudPlatform'

import ResponsiveIframe from '@/app/(docs)/components/ResponsiveIFrame'
import DeployButton from '@/components/global/DeployButton'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Card,
    Cards,
    File,
    Folder,
    Files,
    Step,
    Steps,
    Accordion,
    Accordions,
    AWS,
    Azure,
    DigitalOcean,
    GCP,
    ResponsiveIframe,
    DeployButton,
  }
}
