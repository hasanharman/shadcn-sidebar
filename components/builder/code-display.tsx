// components/builder/code-display.tsx
"use client";

import React, { useState } from "react";
import { CodeFile } from "@/lib/code-generator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Download, FileCode, Folder } from "lucide-react";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeDisplayProps {
  files: CodeFile[];
}

export function CodeDisplay({ files }: CodeDisplayProps) {
  const [activeFile, setActiveFile] = useState(files[0]?.name || "");

  // Group files by directory
  const filesByDirectory: Record<string, CodeFile[]> = {};
  files.forEach((file) => {
    const dirPath = file.path.split("/").slice(0, -1).join("/");
    if (!filesByDirectory[dirPath]) {
      filesByDirectory[dirPath] = [];
    }
    filesByDirectory[dirPath].push(file);
  });

  // Function to determine language for syntax highlighting
  const getLanguage = (filename: string) => {
    if (filename.endsWith(".tsx") || filename.endsWith(".ts"))
      return "typescript";
    if (filename.endsWith(".css")) return "css";
    if (filename.endsWith(".md")) return "markdown";
    return "typescript";
  };

  // Copy file content to clipboard
  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Code copied to clipboard");
  };

  // Download all files as a zip
  const downloadAllFiles = () => {
    // This would require a library like JSZip
    // For now, we'll just show a toast
    toast.info("Download functionality coming soon");
  };

  // Get the currently active file
  const currentFile = files.find((f) => f.name === activeFile);

  return (
    <div className="border rounded-lg flex flex-col h-full">
      <div className="flex items-center justify-between p-2 border-b">
        <h3 className="text-lg font-semibold">Generated Code</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => currentFile && copyToClipboard(currentFile.content)}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={downloadAllFiles}>
            <Download className="h-4 w-4 mr-2" />
            Download All
          </Button>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* File Explorer */}
        <div className="w-64 border-r p-2 overflow-auto">
          {Object.entries(filesByDirectory).map(([directory, dirFiles]) => (
            <div key={directory} className="mb-4">
              <div className="flex items-center text-sm font-medium mb-1 text-muted-foreground">
                <Folder className="h-4 w-4 mr-1" />
                {directory || "Root"}
              </div>
              <ul className="space-y-1 pl-5">
                {dirFiles.map((file) => (
                  <li
                    key={file.path}
                    className={`
                      text-sm cursor-pointer py-1 px-2 rounded
                      ${
                        activeFile === file.name
                          ? "bg-muted font-medium"
                          : "hover:bg-muted/50"
                      }
                    `}
                    onClick={() => setActiveFile(file.name)}
                  >
                    <div className="flex items-center">
                      <FileCode className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                      {file.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {currentFile && (
            <>
              <div className="p-2 border-b text-sm font-mono flex items-center justify-between">
                <span>{currentFile.path}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(currentFile.content)}
                >
                  <Copy className="h-3.5 w-3.5" />
                </Button>
              </div>
              <ScrollArea className="flex-1">
                <SyntaxHighlighter
                  language={getLanguage(currentFile.name)}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    minHeight: "100%",
                  }}
                  showLineNumbers
                >
                  {currentFile.content}
                </SyntaxHighlighter>
              </ScrollArea>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
