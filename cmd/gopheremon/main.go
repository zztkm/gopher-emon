package main

import (
	"flag"
	"fmt"
	"os"
	"runtime"

	"github.com/pkg/browser"
)

const (
	name     = "gopheremon"
	version  = "0.1.0"
	revision = "HEAD"
)

var printVersion = flag.Bool("version", false, "print version")

func fatal(format string, err error) {
	if err != nil {
		fmt.Fprintf(os.Stderr, format, err)
	} else {
		fmt.Fprint(os.Stderr, format)
	}
	os.Exit(1)
}

func usage() {
	fmt.Println(`
gopheremon <command> [arguments]
	site gopheremonの公式サイトにぶっ飛ぶ
		$ gopheremon site
	`)
	os.Exit(1)
}

func main() {
	flag.Parse()

	if *printVersion {
		fmt.Printf("%s %s (rev: %s/%s)\n", name, version, revision, runtime.Version())
		return
	}

	if flag.NArg() < 1 {
		usage()
	}

	switch flag.Arg(0) {
	case "s", "site":
		url := "https://zztkm.github.io/gopher-emon/"
		browser.OpenURL(url)
	default:
		usage()
	}
}
