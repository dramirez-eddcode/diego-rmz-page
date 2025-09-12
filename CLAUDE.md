# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Diego Ramírez's portfolio website - a Next.js 15 application built with TypeScript and Tailwind CSS v4. The project is currently in initial setup phase with a detailed portfolio structure specification in `ESTRUCTURA_LANDING_PAGE.md`.

## Development Commands

- `npm run dev`: Start development server with turbopack (http://localhost:3000)
- `npm run build`: Build production bundle with turbopack
- `npm start`: Start production server

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans & Geist Mono from next/font/google
- **Build Tool**: Turbopack (enabled in dev and build commands)

## Architecture & Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with font loading and basic HTML structure
│   ├── page.tsx        # Home page (currently Next.js default)
│   ├── globals.css     # Global styles with CSS variables and dark mode
│   └── favicon.ico
public/                 # Static assets (Next.js SVG icons)
```

## Key Configurations

- **TypeScript**: Configured with path aliases (`@/*` → `./src/*`)
- **Tailwind**: Uses v4 with inline theme configuration and CSS variables
- **Dark Mode**: Automatic based on system preference via CSS media queries
- **Path Aliases**: `@/*` maps to `./src/*` for imports

## Portfolio Implementation Plan

The `ESTRUCTURA_LANDING_PAGE.md` file contains a comprehensive specification for transforming this into Diego's professional portfolio with:

- Hero section with animated terminal and professional photo
- Interactive project showcase with filtering
- Skills visualization (radar/honeycomb style)
- Timeline-based experience section
- Contact section with multiple engagement options
- Performance targets: Lighthouse 95+, <2s load time

## Notes

- This is a fresh Next.js project that needs to be developed into a full portfolio
- Uses Tailwind CSS v4 syntax and features
- All development commands use turbopack for faster builds
- No testing framework currently configured