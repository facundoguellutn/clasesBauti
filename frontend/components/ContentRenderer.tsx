'use client';

import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ContentRendererProps {
  content: string;
  className?: string;
}

interface TextPart {
  type: 'text' | 'code' | 'inline-code';
  content: string;
  language?: string;
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  // Función para parsear el contenido y detectar bloques de código
  const parseContent = (text: string): TextPart[] => {
    const parts: TextPart[] = [];
    let currentIndex = 0;

    // Regex para bloques de código con triple backticks (con o sin salto de línea)
    const codeBlockRegex = /```(\w+)?\s*\n?([\s\S]*?)```/g;
    // Regex para código inline con backticks simples
    const inlineCodeRegex = /`([^`\n]+)`/g;

    // Primero, encontrar todos los bloques de código
    const codeBlocks: Array<{ start: number; end: number; language: string; code: string }> = [];
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      codeBlocks.push({
        start: match.index,
        end: match.index + match[0].length,
        language: match[1] || 'javascript',
        code: match[2],
      });
    }

    // Ordenar bloques por posición
    codeBlocks.sort((a, b) => a.start - b.start);

    // Procesar el texto
    let lastIndex = 0;

    for (const block of codeBlocks) {
      // Agregar texto antes del bloque de código
      if (block.start > lastIndex) {
        const textBefore = text.substring(lastIndex, block.start);
        // Procesar código inline en el texto
        processInlineCode(textBefore, parts);
      }

      // Agregar el bloque de código
      parts.push({
        type: 'code',
        content: block.code,
        language: block.language,
      });

      lastIndex = block.end;
    }

    // Agregar texto restante
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      processInlineCode(remainingText, parts);
    }

    // Si no hay bloques de código, procesar todo el texto
    if (codeBlocks.length === 0) {
      processInlineCode(text, parts);
    }

    return parts;
  };

  // Función para procesar código inline y devolver elementos mezclados
  const processInlineCode = (text: string, parts: TextPart[]) => {
    const inlineCodeRegex = /`([^`\n]+)`/g;
    let lastIndex = 0;
    let match;
    const textParts: TextPart[] = [];

    while ((match = inlineCodeRegex.exec(text)) !== null) {
      // Agregar texto antes del código inline
      if (match.index > lastIndex) {
        const textBefore = text.substring(lastIndex, match.index);
        if (textBefore) {
          textParts.push({
            type: 'text',
            content: textBefore,
          });
        }
      }

      // Agregar código inline
      textParts.push({
        type: 'inline-code',
        content: match[1],
      });

      lastIndex = match.index + match[0].length;
    }

    // Agregar texto restante
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      if (remainingText) {
        textParts.push({
          type: 'text',
          content: remainingText,
        });
      }
    }

    // Si no hay código inline, agregar todo el texto como un solo bloque
    if (textParts.length === 0 && text) {
      textParts.push({
        type: 'text',
        content: text,
      });
    }

    // Agregar todas las partes al array principal
    parts.push(...textParts);
  };

  const parts = parseContent(content);

  // Agrupar partes consecutivas de texto e inline-code en párrafos
  const renderParts = () => {
    const elements: React.ReactNode[] = [];
    let currentParagraph: TextPart[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p
            key={elements.length}
            className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed"
          >
            {currentParagraph.map((part, idx) => {
              if (part.type === 'inline-code') {
                return (
                  <code
                    key={idx}
                    className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-slate-900 dark:text-slate-100"
                  >
                    {part.content}
                  </code>
                );
              }
              return <span key={idx}>{part.content}</span>;
            })}
          </p>
        );
        currentParagraph = [];
      }
    };

    parts.forEach((part, index) => {
      if (part.type === 'code') {
        flushParagraph();
        elements.push(
          <CodeBlock
            key={index}
            code={part.content}
            language={part.language}
            showLineNumbers={true}
          />
        );
      } else {
        currentParagraph.push(part);
      }
    });

    flushParagraph();

    return elements;
  };

  return <div className={`space-y-4 ${className}`}>{renderParts()}</div>;
}

