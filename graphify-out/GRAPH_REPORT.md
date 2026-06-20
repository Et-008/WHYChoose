# Graph Report - .  (2026-06-20)

## Corpus Check
- 166 files · ~54,969 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1172 nodes · 2368 edges · 72 communities (65 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Artifact System|Artifact System]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Prompt Input & Attachments|Prompt Input & Attachments]]
- [[_COMMUNITY_Auth Forms & Actions|Auth Forms & Actions]]
- [[_COMMUNITY_Reasoning Display|Reasoning Display]]
- [[_COMMUNITY_Message Components|Message Components]]
- [[_COMMUNITY_Code Block Rendering|Code Block Rendering]]
- [[_COMMUNITY_Prompt Input Commands|Prompt Input Commands]]
- [[_COMMUNITY_Build Config & Dev Deps|Build Config & Dev Deps]]
- [[_COMMUNITY_Editor Settings|Editor Settings]]
- [[_COMMUNITY_Diff View|Diff View]]
- [[_COMMUNITY_Mock Models & Prompts|Mock Models & Prompts]]
- [[_COMMUNITY_Mobile Sheet UI|Mobile Sheet UI]]
- [[_COMMUNITY_Auth Config & Entitlements|Auth Config & Entitlements]]
- [[_COMMUNITY_Model Selector Content|Model Selector Content]]
- [[_COMMUNITY_Chat History Sidebar|Chat History Sidebar]]
- [[_COMMUNITY_Multimodal Input|Multimodal Input]]
- [[_COMMUNITY_Text & Suggestion Editor|Text & Suggestion Editor]]
- [[_COMMUNITY_Chat API Route & Schema|Chat API Route & Schema]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Command Palette & Dialog|Command Palette & Dialog]]
- [[_COMMUNITY_Code Editor & Console|Code Editor & Console]]
- [[_COMMUNITY_E2E Page Objects|E2E Page Objects]]
- [[_COMMUNITY_App Sidebar|App Sidebar]]
- [[_COMMUNITY_shadcn Components Config|shadcn Components Config]]
- [[_COMMUNITY_Suggestion DB Queries|Suggestion DB Queries]]
- [[_COMMUNITY_Chat Deletion & Errors|Chat Deletion & Errors]]
- [[_COMMUNITY_Document Preview|Document Preview]]
- [[_COMMUNITY_Conversation View|Conversation View]]
- [[_COMMUNITY_Model Definitions|Model Definitions]]
- [[_COMMUNITY_Image Editor|Image Editor]]
- [[_COMMUNITY_Input Group UI|Input Group UI]]
- [[_COMMUNITY_Suggested Actions|Suggested Actions]]
- [[_COMMUNITY_Chat Actions|Chat Actions]]
- [[_COMMUNITY_Artifact Data Stream|Artifact Data Stream]]
- [[_COMMUNITY_Editor Toolbar|Editor Toolbar]]
- [[_COMMUNITY_Model Tests|Model Tests]]
- [[_COMMUNITY_Vote & Message Queries|Vote & Message Queries]]
- [[_COMMUNITY_Document Tool Calls|Document Tool Calls]]
- [[_COMMUNITY_Spreadsheet Editor|Spreadsheet Editor]]
- [[_COMMUNITY_Document API Route|Document API Route]]
- [[_COMMUNITY_Message Actions|Message Actions]]
- [[_COMMUNITY_Document Handlers|Document Handlers]]
- [[_COMMUNITY_App Layout & Shell|App Layout & Shell]]
- [[_COMMUNITY_Auth Layout & Preview|Auth Layout & Preview]]
- [[_COMMUNITY_Chat Header & Button|Chat Header & Button]]
- [[_COMMUNITY_Attachment Preview|Attachment Preview]]
- [[_COMMUNITY_DB Migration Journal|DB Migration Journal]]
- [[_COMMUNITY_Hover Card UI|Hover Card UI]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 71|Community 71]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 206 edges
2. `ChatMessage` - 22 edges
3. `Button()` - 19 edges
4. `useArtifact()` - 17 edges
5. `compilerOptions` - 17 edges
6. `useSidebar()` - 15 edges
7. `ChatPage` - 15 edges
8. `scripts` - 14 edges
9. `getChatById()` - 12 edges
10. `ChatbotError` - 12 edges

## Surprising Connections (you probably didn't know these)
- `CodeBlockContainer()` --calls--> `cn()`  [EXTRACTED]
  components/ai-elements/code-block.tsx → lib/utils.ts
- `CodeBlockHeader()` --calls--> `cn()`  [EXTRACTED]
  components/ai-elements/code-block.tsx → lib/utils.ts
- `CodeBlockTitle()` --calls--> `cn()`  [EXTRACTED]
  components/ai-elements/code-block.tsx → lib/utils.ts
- `CodeBlockFilename()` --calls--> `cn()`  [EXTRACTED]
  components/ai-elements/code-block.tsx → lib/utils.ts
- `CodeBlockActions()` --calls--> `cn()`  [EXTRACTED]
  components/ai-elements/code-block.tsx → lib/utils.ts

## Import Cycles
- 3-file cycle: `artifacts/code/client.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx -> artifacts/code/client.tsx`
- 3-file cycle: `artifacts/image/client.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx -> artifacts/image/client.tsx`
- 3-file cycle: `artifacts/sheet/client.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx -> artifacts/sheet/client.tsx`
- 3-file cycle: `artifacts/text/client.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx -> artifacts/text/client.tsx`
- 3-file cycle: `artifacts/text/client.tsx -> components/chat/document-skeleton.tsx -> components/chat/artifact.tsx -> artifacts/text/client.tsx`
- 3-file cycle: `components/chat/artifact-actions.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx -> components/chat/artifact-actions.tsx`
- 3-file cycle: `components/chat/artifact.tsx -> components/chat/toolbar.tsx -> components/chat/create-artifact.tsx -> components/chat/artifact.tsx`
- 3-file cycle: `lib/ai/tools/create-document.ts -> lib/utils.ts -> lib/types.ts -> lib/ai/tools/create-document.ts`
- 3-file cycle: `lib/ai/tools/request-suggestions.ts -> lib/utils.ts -> lib/types.ts -> lib/ai/tools/request-suggestions.ts`
- 3-file cycle: `lib/ai/tools/create-document.ts -> lib/artifacts/server.ts -> lib/types.ts -> lib/ai/tools/create-document.ts`
- 3-file cycle: `lib/ai/tools/update-document.ts -> lib/artifacts/server.ts -> lib/types.ts -> lib/ai/tools/update-document.ts`
- 3-file cycle: `components/chat/sidebar-history-item.tsx -> hooks/use-chat-visibility.ts -> components/chat/sidebar-history.tsx -> components/chat/sidebar-history-item.tsx`
- 3-file cycle: `app/(chat)/actions.ts -> components/chat/visibility-selector.tsx -> hooks/use-chat-visibility.ts -> app/(chat)/actions.ts`
- 4-file cycle: `artifacts/actions.ts -> lib/db/queries.ts -> components/chat/artifact.tsx -> artifacts/text/client.tsx -> artifacts/actions.ts`
- 4-file cycle: `components/chat/artifact.tsx -> lib/types.ts -> lib/ai/tools/create-document.ts -> lib/artifacts/server.ts -> components/chat/artifact.tsx`
- 4-file cycle: `components/chat/artifact.tsx -> lib/types.ts -> lib/ai/tools/request-suggestions.ts -> lib/db/queries.ts -> components/chat/artifact.tsx`
- 4-file cycle: `components/chat/artifact.tsx -> lib/types.ts -> lib/ai/tools/update-document.ts -> lib/artifacts/server.ts -> components/chat/artifact.tsx`
- 4-file cycle: `components/chat/artifact.tsx -> lib/types.ts -> lib/ai/tools/update-document.ts -> lib/db/queries.ts -> components/chat/artifact.tsx`
- 4-file cycle: `lib/ai/tools/request-suggestions.ts -> lib/db/queries.ts -> lib/utils.ts -> lib/types.ts -> lib/ai/tools/request-suggestions.ts`
- 4-file cycle: `lib/ai/tools/update-document.ts -> lib/db/queries.ts -> lib/utils.ts -> lib/types.ts -> lib/ai/tools/update-document.ts`

## Communities (72 total, 7 thin omitted)

### Community 0 - "Artifact System"
Cohesion: 0.06
Nodes (56): artifactKinds, ArtifactActions, ArtifactActionsProps, artifactDefinitions, ArtifactMessages, ArtifactMessagesProps, PureArtifactMessages(), UIArtifact (+48 more)

### Community 1 - "NPM Dependencies"
Cohesion: 0.03
Nodes (66): dependencies, ai, @ai-sdk/provider, @ai-sdk/react, bcrypt-ts, botid, class-variance-authority, classnames (+58 more)

### Community 2 - "Prompt Input & Attachments"
Cohesion: 0.03
Nodes (50): AttachmentsContext, LocalAttachmentsContext, LocalReferencedSourcesContext, PromptInput(), PromptInputActionAddAttachments(), PromptInputActionAddAttachmentsProps, PromptInputActionMenuContentProps, PromptInputActionMenuItemProps (+42 more)

### Community 3 - "Auth Forms & Actions"
Cohesion: 0.06
Nodes (42): authFormSchema, login(), LoginActionState, register(), RegisterActionState, AuthForm(), CheckCircleFillIcon(), ChevronDownIcon() (+34 more)

### Community 4 - "Reasoning Display"
Cohesion: 0.05
Nodes (42): Reasoning, ReasoningContent, ReasoningContentProps, ReasoningContext, ReasoningContextValue, ReasoningProps, ReasoningTrigger, ReasoningTriggerProps (+34 more)

### Community 5 - "Message Components"
Cohesion: 0.06
Nodes (36): Message(), MessageActionProps, MessageActionsProps, MessageBranch(), MessageBranchContent(), MessageBranchContentProps, MessageBranchContext, MessageBranchContextType (+28 more)

### Community 6 - "Code Block Rendering"
Cohesion: 0.05
Nodes (32): CodeBlock(), CodeBlockActions(), CodeBlockBody, CodeBlockContainer(), CodeBlockContext, CodeBlockContextType, CodeBlockCopyButton(), CodeBlockCopyButtonProps (+24 more)

### Community 7 - "Prompt Input Commands"
Cohesion: 0.06
Nodes (38): PromptInputActionMenuContent(), PromptInputActionMenuItem(), PromptInputBody(), PromptInputButton(), PromptInputCommand(), PromptInputCommandEmpty(), PromptInputCommandGroup(), PromptInputCommandInput() (+30 more)

### Community 8 - "Build Config & Dev Deps"
Cohesion: 0.05
Nodes (36): devDependencies, babel-plugin-react-compiler, @biomejs/biome, drizzle-kit, @playwright/test, postcss, tailwindcss, @tailwindcss/postcss (+28 more)

### Community 9 - "Editor Settings"
Cohesion: 0.05
Nodes (36): [css], editor.defaultFormatter, editor.codeActionsOnSave, source.fixAll.biome, source.organizeImports.biome, editor.defaultFormatter, editor.formatOnPaste, editor.formatOnSave (+28 more)

### Community 10 - "Diff View"
Cohesion: 0.11
Nodes (28): MessageResponse, computeDiff(), DiffEditorProps, diffSchema, DiffView(), assertNodeTypeEqual(), computeChildEqualityFactor(), createDiffNode() (+20 more)

### Community 11 - "Mock Models & Prompts"
Cohesion: 0.12
Nodes (18): chatModel, mockResponses, mockUsage, titleModel, getRequestPromptFromHints(), RequestHints, systemPrompt(), updateDocumentPrompt() (+10 more)

### Community 12 - "Mobile Sheet UI"
Cohesion: 0.09
Nodes (22): useIsMobile(), Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+14 more)

### Community 13 - "Auth Config & Entitlements"
Cohesion: 0.09
Nodes (13): Entitlements, entitlementsByUserType, {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}, JWT, Session, User, UserType, createGuestUser() (+5 more)

### Community 14 - "Model Selector Content"
Cohesion: 0.09
Nodes (20): ModelSelectorContent(), ModelSelectorContentProps, ModelSelectorEmptyProps, ModelSelectorGroupProps, ModelSelectorInput(), ModelSelectorInputProps, ModelSelectorItemProps, ModelSelectorListProps (+12 more)

### Community 16 - "Chat History Sidebar"
Cohesion: 0.15
Nodes (17): Artifact, ChatHistory, getChatHistoryPaginationKey(), GroupedChats, AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent() (+9 more)

### Community 17 - "Multimodal Input"
Cohesion: 0.10
Nodes (17): ModelSelector(), ModelSelectorGroup(), ModelSelectorItem(), ModelSelectorList(), ModelSelectorLogo(), ModelSelectorName(), PaperclipIcon(), AttachmentsButton (+9 more)

### Community 18 - "Text & Suggestion Editor"
Cohesion: 0.20
Nodes (15): CrossIcon(), SuggestionDialog(), EditorProps, PureEditor(), documentSchema, handleTransaction(), headingRule(), buildContentFromDocument() (+7 more)

### Community 19 - "Chat API Route & Schema"
Cohesion: 0.13
Nodes (16): DELETE(), POST(), filePartSchema, partSchema, PostRequestBody, postRequestBodySchema, textPartSchema, toolApprovalMessageSchema (+8 more)

### Community 20 - "TypeScript Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+12 more)

### Community 21 - "Command Palette & Dialog"
Cohesion: 0.12
Nodes (16): Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+8 more)

### Community 22 - "Code Editor & Console"
Cohesion: 0.14
Nodes (13): CodeEditor, EditorProps, Console(), ConsoleOutput, ConsoleOutputContent, ConsoleProps, LogsIcon(), PlayIcon() (+5 more)

### Community 23 - "E2E Page Objects"
Cohesion: 0.16
Nodes (3): ChatPage, Fixtures, test

### Community 24 - "App Sidebar"
Cohesion: 0.21
Nodes (14): SidebarLeftIcon(), SidebarHistory(), SidebarToggle(), Sidebar(), SidebarContent(), SidebarFooter(), SidebarGroup(), SidebarHeader() (+6 more)

### Community 25 - "shadcn Components Config"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 26 - "Suggestion DB Queries"
Cohesion: 0.16
Nodes (12): getSuggestions(), client, createStreamId(), db, getSuggestionsByDocumentId(), saveSuggestions(), updateChatTitleById(), updateMessage() (+4 more)

### Community 27 - "Chat Deletion & Errors"
Cohesion: 0.17
Nodes (12): deleteAllChatsByUserId(), getChatsByUserId(), DELETE(), GET(), ChatbotError, ErrorCode, ErrorType, ErrorVisibility (+4 more)

### Community 28 - "Document Preview"
Cohesion: 0.15
Nodes (10): ArtifactKind, DocumentHeader, DocumentPreviewProps, DocumentToolOutput, HitboxLayer, DocumentSkeleton(), InlineDocumentSkeleton(), CodeIcon() (+2 more)

### Community 29 - "Conversation View"
Cohesion: 0.14
Nodes (11): Conversation(), ConversationContent(), ConversationContentProps, ConversationDownload(), ConversationDownloadProps, ConversationEmptyState(), ConversationEmptyStateProps, ConversationMessage (+3 more)

### Community 30 - "Model Definitions"
Cohesion: 0.19
Nodes (11): allowedModelIds, ChatModel, chatModels, GatewayModel, GatewayModelWithCapabilities, getAllGatewayModels(), getCapabilities(), ModelCapabilities (+3 more)

### Community 31 - "Image Editor"
Cohesion: 0.18
Nodes (11): ClockRewind(), CopyIcon(), PenIcon(), RedoIcon(), UndoIcon(), ImageEditor(), ImageEditorProps, Editor (+3 more)

### Community 32 - "Input Group UI"
Cohesion: 0.21
Nodes (10): InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea() (+2 more)

### Community 33 - "Suggested Actions"
Cohesion: 0.21
Nodes (8): Suggestion(), SuggestionProps, Suggestions(), SuggestionsProps, SuggestedActions, SuggestedActionsProps, ScrollArea(), ScrollBar()

### Community 34 - "Chat Actions"
Cohesion: 0.27
Nodes (9): getTitleModel(), deleteTrailingMessages(), generateTitleFromUserMessage(), updateChatVisibility(), submitEditedMessage(), deleteMessagesByChatIdAfterTimestamp(), getMessageById(), updateChatVisibilityById() (+1 more)

### Community 35 - "Artifact Data Stream"
Cohesion: 0.26
Nodes (9): ArtifactCloseButton, PureArtifactCloseButton(), PureArtifact(), DataStreamHandler(), DocumentContent(), DocumentPreview(), initialArtifactData, Selector (+1 more)

### Community 36 - "Editor Toolbar"
Cohesion: 0.18
Nodes (8): ArrowUpIcon(), StopIcon(), SummarizeIcon(), createFixErrorTool(), PureToolbar(), randomArr, Toolbar, ToolProps

### Community 37 - "Model Tests"
Cohesion: 0.20
Nodes (9): chatModel, mockFinishReason, mockGenerateResult, mockUsage, reasoningModel, titleGenerateResult, titleModel, getResponseChunksByPrompt() (+1 more)

### Community 38 - "Vote & Message Queries"
Cohesion: 0.31
Nodes (9): getChatById(), getMessagesByChatId(), getVotesByChatId(), voteMessage(), convertToUIMessages(), GET(), GET(), PATCH() (+1 more)

### Community 39 - "Document Tool Calls"
Cohesion: 0.24
Nodes (9): DocumentToolCall, DocumentToolCallProps, DocumentToolResult, DocumentToolResultProps, getActionText(), PureDocumentToolCall(), PureDocumentToolResult(), FileIcon() (+1 more)

### Community 40 - "Spreadsheet Editor"
Cohesion: 0.25
Nodes (5): LineChartIcon(), SheetEditorProps, SpreadsheetEditor, Metadata, sheetArtifact

### Community 41 - "Document API Route"
Cohesion: 0.39
Nodes (8): deleteDocumentsByIdAfterTimestamp(), getDocumentsById(), saveDocument(), updateDocumentContent(), DELETE(), documentSchema, GET(), POST()

### Community 42 - "Message Actions"
Cohesion: 0.25
Nodes (6): MessageAction(), MessageActions(), PencilEditIcon(), ThumbDownIcon(), ThumbUpIcon(), MessageActions

### Community 43 - "Document Handlers"
Cohesion: 0.25
Nodes (6): documentHandlersByArtifactKind, getDocumentById(), editDocument(), EditDocumentProps, updateDocument(), UpdateDocumentProps

### Community 44 - "App Layout & Shell"
Cohesion: 0.25
Nodes (5): AppSidebar(), DataStreamProvider(), ChatShell(), useActiveChat(), SidebarInset()

### Community 45 - "Auth Layout & Preview"
Cohesion: 0.38
Nodes (4): SparklesIcon(), VercelIcon(), Preview(), suggestions

### Community 46 - "Chat Header & Button"
Cohesion: 0.47
Nodes (4): ChatHeader, PureChatHeader(), Button(), buttonVariants

### Community 47 - "Attachment Preview"
Cohesion: 0.50
Nodes (3): CrossSmallIcon(), PreviewAttachment(), Attachment

### Community 48 - "DB Migration Journal"
Cohesion: 0.50
Nodes (3): dialect, entries, version

### Community 49 - "Hover Card UI"
Cohesion: 0.50
Nodes (3): HoverCard(), HoverCardContent(), HoverCardTrigger()

## Knowledge Gaps
- **381 isolated node(s):** `PreToolUse`, `recommendations`, `editor.defaultFormatter`, `editor.defaultFormatter`, `editor.defaultFormatter` (+376 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Prompt Input Commands` to `Artifact System`, `Prompt Input & Attachments`, `Auth Forms & Actions`, `Reasoning Display`, `Message Components`, `Code Block Rendering`, `Mobile Sheet UI`, `Model Selector Content`, `Chat History Sidebar`, `Multimodal Input`, `Command Palette & Dialog`, `Code Editor & Console`, `App Sidebar`, `Document Preview`, `Conversation View`, `Image Editor`, `Input Group UI`, `Suggested Actions`, `Artifact Data Stream`, `Spreadsheet Editor`, `Message Actions`, `App Layout & Shell`, `Chat Header & Button`, `Hover Card UI`?**
  _High betweenness centrality (0.219) - this node is a cross-community bridge._
- **Why does `ChatMessage` connect `Artifact System` to `Suggested Actions`, `Chat Actions`, `Reasoning Display`, `Editor Toolbar`, `Message Actions`, `Mock Models & Prompts`, `Document Handlers`, `Chat History Sidebar`, `Multimodal Input`, `Chat API Route & Schema`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `Artifact` connect `Artifact System` to `Spreadsheet Editor`, `Code Editor & Console`, `Image Editor`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `PreToolUse`, `recommendations`, `editor.defaultFormatter` to the rest of the system?**
  _381 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Artifact System` be split into smaller, more focused modules?**
  _Cohesion score 0.056842105263157895 - nodes in this community are weakly interconnected._
- **Should `NPM Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.030303030303030304 - nodes in this community are weakly interconnected._
- **Should `Prompt Input & Attachments` be split into smaller, more focused modules?**
  _Cohesion score 0.034902168164992066 - nodes in this community are weakly interconnected._