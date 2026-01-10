import piauNetArch from '../assets/images/ProjectImages/Architecture.jpg';
import pbArch from '../assets/images/ProjectImages/PB_Architecture.png';

// New Cover Images
import churnCover from '../assets/images/ProjectImages/Churn_Cover.png';
import insuranceCover from '../assets/images/ProjectImages/Insurance_Cover.png';
import piauNetCover from '../assets/images/ProjectImages/PIAUNet_Cover.png';
import urbanMobilityCover from '../assets/images/ProjectImages/UrbanMobility_Cover.png';

export const projectsData = [
    {
        id: 'urban-mobility-ops',
        title: 'Urban Mobility Operations Center',
        description: 'An industrial-grade data pipeline solving the "empty station" problem for NYC CitiBike.',
        isNew: true,
        fullDescription: `
            <h3>The Challenge: A City in Motion</h3>
            <p>Managing a bike-sharing network like NYC CitiBike is a logistical nightmare. Demand fluctuates wildly based on weather, rush hours, and events. A station can go from "full" (blocking returns) to "empty" (blocking rentals) in minutes. Operational teams are often reactive, scrambling to rebalance fleets after the problem has already occurred.</p>
            
            <p>I built this project to answer a critical operational question: <strong>How can we turn chaotic trip data into structured intelligence that prevents service disruptions?</strong></p>

            <h3>The Solution</h3>
            <p>I engineered an end-to-end ELT (Extract, Load, Transform) pipeline that acts as the central nervous system for mobility operations. It doesn't just store data; it actively processes it to simulate the heartbeat of the network.</p>

            <h3>Key Engineering & Architecture</h3>
            <ul>
                <li><strong>Resilient Ingestion (The ELT Pipeline):</strong> I built a robust Python pipeline that handles the messy reality of real-world data. It features automatic retry logic for network failures and chunk-based processing to handle massive datasets without crashing memory.</li>
                <li><strong>Strategy Pattern Design:</strong> Code reusability is key. I implemented the Strategy Pattern (<code>CityConfig</code>) to decouple the core logic from city-specific rules. This means the same engine runs NYC, London, or Chicago with zero code duplication—just a configuration switch.</li>
                <li><strong>Hybrid Cloud/Local Storage:</strong> To make the system developer-friendly yet production-ready, I designed a storage layer that adapts to its environment. It seamlessly switches between a local MySQL instance for development and a cloud-native SQLite setup for lightweight deployment.</li>
                <li><strong>Data Warehouse Modeling:</strong> I didn't just dump data into a table. I designed a Star Schema warehouse, optimizing it for complex analytical queries (OLAP) rather than simple transaction lookups.</li>
            </ul>

            <h3>The Impact</h3>
            <p>The resulting dashboard gives operations managers superpowers. They can see "Net Inflow/Outflow" in real-time to predict which stations will deplete next, allowing them to dispatch trucks proactively rather than reactively.</p>
        `,
        image: urbanMobilityCover,
        techStack: ['Python', 'MySQL', 'Streamlit', 'Docker'],
        github: 'https://github.com/MahboobAlam0/urban-mobility-ops',
        demo: 'https://urbanmobilityops.streamlit.app/',
    },
    {
        id: 'piau-net',
        title: 'Physics-Informed Attention U-Net',
        description: 'Teaching an AI to "see" underwater by embedding optical physics into the neural network.',
        fullDescription: `
            <h3>The Problem: AI is "Physics-Blind"</h3>
            <p>Standard AI models treat images as simple grids of numbers. They don't understand that underwater images look green not because the object is green, but because water absorbs red light. This "blindness" causes standard segmentation models (like U-Net) to fail catastrophically when lighting conditions change.</p>

            <h3>My Solution: PIAU-Net</h3>
            <p>I didn't just train a model; I designed a new architecture. <strong>PIAU-Net (Physics-Informed Attention U-Net)</strong> hybridizes deep learning with optical physics.</p>

            <h3>Model Architecture</h3>
            <p>PIAU-Net follows an encoder–decoder design with skip connections, similar to U-Net, with the following enhancements:</p>
            
            <h4>PIAUNet Architecture</h4>
            <img src="${piauNetArch}" alt="PIAU-Net Architecture" style="width: 100%; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid var(--glass-border);" />

            <ul>
                <li><strong>Physics Branch:</strong> Processes bottleneck features to generate physics-inspired representations (e.g., visibility- or attenuation-like cues).
                    <div style="margin: 1rem 0;">
                        <img src="${pbArch}" alt="Physics Branch Architecture" style="width: 100%; border-radius: 8px; border: 1px solid var(--glass-border);" />
                        <p style="font-size: 0.8rem; text-align: center; color: var(--text-secondary); margin-top: 0.5rem;">Physics Branch Architecture</p>
                    </div>
                </li>
                <li><strong>Attention Gates:</strong> The network uses this physics knowledge to "gate" its learning. It tells the decoder: <em>"Ignore this blurry green patch—it's just water scattering. Focus on this sharp edge instead."</em></li>
                <li><strong>Custom Loss Function:</strong> I wrote a custom loss function that penalizes the model not just for wrong pixels, but for violating physical consistency rules.</li>
            </ul>

            <h3>Why It Matters</h3>
            <p>This approach makes the AI interpretable and robust. Instead of memorizing dataset patterns, it learns the fundamental laws of underwater vision, allowing it to generalize to new, unseen ocean environments.</p>
        `,
        image: piauNetCover,
        techStack: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Research'],
        github: 'https://github.com/MahboobAlam0/piaunet',
        demo: null,
    },
    {
        id: 'churn-intervention',
        title: 'Business Metric–Driven Churn Intervention',
        description: 'Moving beyond "who will churn" to "who is financially worth saving."',
        fullDescription: `
            <h3>The Flaw in Traditional Churn Prediction</h3>
            <p>In data science, we often obsess over accuracy. "My model is 95% accurate!" sounds great, but in a business context, it can be misleading. If you offer a $50 discount to save a customer who only pays you $10 a month, you've just lost money—even if you "saved" them.</p>
            
            <p>I realized that <strong>churn prediction is not a classification problem; it's a resource allocation problem.</strong></p>

            <h3>A Profit-First Approach</h3>
            <p>This project rebuilds the standard churn workflow from the ground up, prioritizing <strong>Net Revenue Retention</strong> over simple accuracy metrics like F1-score.</p>
            
            <h3>How It Works</h3>
            <ul>
                <li><strong>Customer Lifetime Value (CLV) Engine:</strong> The system first calculates the projected future value of every customer.</li>
                <li><strong>Intervention Cost Logic:</strong> It factors in the real cost of saving a customer (e.g., the cost of a support call or a discount voucher).</li>
                <li><strong>The Decision Matrix:</strong> instead of a simple "Churn/No Churn" label, the model outputs a strategic segment:
                    <ul>
                        <li><strong style="color: #4ade80;">Saveable (High Priority):</strong> High risk, but high value. The cost of intervention is justified.</li>
                        <li><strong style="color: #f87171;">Lost Cause:</strong> High risk, but negative ROI. Let them go.</li>
                        <li><strong>Safe:</strong> Low risk. Do not disturb (and waste budget).</li>
                    </ul>
                </li>
            </ul>

            <h3>Results</h3>
            <p>When tested against a standard "blanket intervention" strategy, this targeted approach reduced retention spend by ~60% while capturing 80% of the at-risk revenue.</p>
        `,
        image: churnCover,
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Business Intelligence'],
        github: 'https://github.com/MahboobAlam0/businesschurn',
        demo: 'https://businesschurn.streamlit.app/',
    },
    {
        id: 'medical-insurance',
        title: 'Medical Insurance Cost Analysis',
        description: 'Uncovering the hidden non-linear multipliers in insurance pricing models.',
        fullDescription: `
            <h3>De-mystifying the Price Tag</h3>
            <p>We've all wondered: Why is my insurance quote so different from my neighbor's? Is it just age? Is it bad luck? I decided to treat the insurance pricing model as a "black box" and reverse-engineer its logic using data.</p>

            <h3>The Investigation</h3>
            <p>I started with Exploratory Data Analysis (EDA) on a dataset of thousands of beneficiaries. At first glance, everything looked linear—older people pay more, smokers pay more.</p>
            
            <p>But then I found the anomaly.</p>

            <h3>The "Smoker-BMI" Multiplier</h3>
            <p>I discovered a critical interaction effect that most simple models miss. Smoking doesn't just add a flat fee; it acts as a <strong>multiplier</strong> when combined with high BMI.</p>
            <ul>
                <li><strong>Smoker (Normal BMI):</strong> Pays a premium of ~$10k.</li>
                <li><strong>Obese (Non-Smoker):</strong> Pays a small premium.</li>
                <li><strong>Smoker + Obese:</strong> The cost skyrockets, often 3x the base rate. It’s strictly non-linear.</li>
            </ul>

            <h3>Technical Execution</h3>
            <p>I proved this mathematically by training two models. A standard Linear Regression achieved ~78% accuracy. But once I switched to a Random Forest Regressor—which can naturally capture these non-linear "if-this-then-that" interactions—accuracy jumped to <strong>~85%</strong>. This gap proved that the pricing structure is inherently complex and interaction-driven.</p>
        `,
        image: insuranceCover,
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
        github: 'https://github.com/MahboobAlam0/medicalinsurancecostanalysis',
        demo: 'https://medicalinsurancecostanalysis0.streamlit.app',
    }
];
