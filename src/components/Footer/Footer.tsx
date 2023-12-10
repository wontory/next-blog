export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href="https://github.com/wontory"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            wontory
          </a>
          .
          <br />
          Copyright 2023. wontory All rights reserved.
        </p>
      </div>
    </footer>
  )
}
