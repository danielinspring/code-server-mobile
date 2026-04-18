import { useState } from 'react';
import { Edit3 } from 'lucide-react';
import { MDXEditor, headingsPlugin, listsPlugin, quotePlugin, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles, markdownShortcutPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

export function PromptEditorView() {
  const [prompt, setPrompt] = useState('# System Prompt\n\nYou are an expert software engineer...\n\nAnalyze the following code and provide a critique.')

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">WYSIWYG Prompt Editor</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700">
          Save
        </button>
      </div>
      <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <MDXEditor
            className="w-full min-h-[300px] prose prose-sm max-w-none p-2"
            markdown={prompt}
            onChange={setPrompt}
            plugins={[
              headingsPlugin(),
              listsPlugin(),
              quotePlugin(),
              markdownShortcutPlugin(),
              toolbarPlugin({
                toolbarContents: () => (
                  <div className="flex items-center gap-2 flex-wrap">
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                  </div>
                )
              })
            ]}
          />
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center">Modifications sync to SurrealDB directly.</p>
    </div>
  )
}

export const PromptPlugin = {
  id: 'prompt',
  label: 'Prompt',
  icon: <Edit3 size={24} />,
  component: PromptEditorView
};
