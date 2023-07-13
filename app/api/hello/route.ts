import puppeteer from 'puppeteer'

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://developer.chrome.com/')
}
