<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site is a single static-friendly landing page; all editable business content lives in `src/content/site.ts` (why: owner edits one file, no backend needed for Cloudflare deploy).
- Quote form uses mailto, no server secrets (why: works on any static/edge host without configuration).
