export const blogsData = [
    {
        id: "starting-my-data-science-journey",
        title: "My First Week at DIAT: Why I Chose Data Science",
        date: "December 30, 2025",
        summary: "Reflecting on my shift into M.Tech and the overwhelming (but exciting) world of tensors.",
        content: `
            <p>Honestly, the first few days here at DIAT have been a whirlwind. Coming from a CS background, I thought I knew what "data" was. But diving into the math behind high-dimensional tensors? That's a whole different beast.</p>
            <h3>The "Why"</h3>
            <p>I realized that coding conventional apps wasn't enough for me. I wanted to build systems that could <em>learn</em>. The moment I ran my first rigorous regression model and saw it actually predict trends, I was hooked. It felt less like programming and more like teaching.</p>
            <h3>Current Struggles</h3>
            <p>Right now, I'm wrestling with the deeper concepts of optimization algorithms. Gradient Descent makes sense on paper, but tuning learning rates in practice is an art form I haven't mastered yet. I'm hoping to document my failures here as much as my wins, because that's where the real learning happens.</p>
        `,
        tags: ["Personal", "Life at DIAT", "Reflections"]
    },
    {
        id: "struggling-with-attention",
        title: "That 'Aha!' Moment with Attention Mechanisms",
        date: "January 2, 2026",
        summary: "I finally understood why U-Net wasn't enough for my underwater images.",
        content: `
            <p>For weeks, I was stuck on my underwater image segmentation project. The standard U-Net was good, but it kept confusing the murky water background with the actual fish/objects. It was frustrating.</p>
            <h3>The Breakthrough</h3>
            <p>I was reading about Attention Gates in medical imaging papers (specifically for CT scans) and wondered: <em>"Could this filter out the water haze?"</em></p>
            <p>Implementing it was tricky—getting the dimensions to match in PyTorch gave me so many errors. But once it clicked, the difference was night and day. The model started ignoring the blue haze and focused purely on the edges of the objects. It really showed me that sometimes the answer isn't a bigger model, but a smarter architecture.</p>
        `,
        tags: ["Deep Learning", "Projects", "Dev Log"]
    }
];
