import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({ content }) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{content || "Loading recipe..."}</ReactMarkdown>
            </article>
        </section>
    )
}
