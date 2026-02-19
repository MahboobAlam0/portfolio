import piauNetArch from '../assets/images/ProjectImages/Architecture.jpg';
import pbArch from '../assets/images/ProjectImages/PB_Architecture.png';

// New Cover Images
import churnCover from '../assets/images/ProjectImages/Churn_Cover.png';
import insuranceCover from '../assets/images/ProjectImages/Insurance_Cover.png';
import piauNetCover from '../assets/images/ProjectImages/PIAUNet_Cover.png';
import urbanMobilityCover from '../assets/images/ProjectImages/UrbanMobility_Cover.png';
import finSightCover from '../assets/images/ProjectImages/FinSight_Cover.png';


import hmtEcgCover from '../assets/images/ProjectImages/HMT_ECG_Cover.png';

export const projectsData = [
    {
        id: 'finsight-ai',
        title: 'FinSight: Financial Sentiment & Narrative Intelligence System',
        description: 'An automated market intelligence pipeline that ingests raw news, quantifies financial sentiment using FinBERT, and synthesizes strategic insights using LLMs.',
        isNew: true,
        overview: 'An automated <strong>End-to-End Market Intelligence Pipeline</strong> that ingests raw news, quantifies financial sentiment using domain-specific BERT models, and synthesizes strategic insights using Large Language Models (LLM).',
        problem: 'In the modern financial ecosystem, analysts are overwhelmed by the velocity of news. Generic NLP models fail to capture financial nuances (e.g., "profit warning" vs "cost cutting"), and manually processing real-time news streams is impossible, leading to information overload and missed opportunities.',
        solution: `I engineered a <strong>Lambda Architecture</strong> pipeline for real-time financial intelligence:
        <br><br>
        <strong>1. Data Ingestion (The "Eyes"):</strong>
        Built a concurrent web scraper using <code>BeautifulSoup</code> and <code>concurrent.futures</code> to fetch news with <strong>~85% reduced latency</strong>. Implements heuristic filtering to reject irrelevant noise.
        <br><br>
        <strong>2. Semantic Analysis (The "Brain"):</strong>
        Replaced generic sentiment models with <strong>FinBERT</strong> (<code>ProsusAI/finbert</code>), enabling state-of-the-art accuracy in classifying financial text. Utilizes a distilled BART model for abstractive summarization.
        <br><br>
        <strong>3. Generative Reasoning (The "Analyst"):</strong>
        Orchestrated an LLM-based agent (powered by <strong>Groq Llama-3-70b</strong>) to perform high-level cognitive tasks like risk detection and narrative synthesis, returning strictly typed JSON.`,
        key_results: [
            '<strong>Sentiment Accuracy:</strong> ~97% on standard financial phrasebank datasets via FinBERT.',
            '<strong>End-to-End Latency:</strong> &lt; 30 seconds for full company analysis (Scrape + Summary + Sentiment).',
            '<strong>Inference Speed:</strong> LLM response &lt; 1 second using Groq LPU technology.'
        ],
        impact: 'Democratizes institutional-grade financial analytics, allowing retail investors to instantly understand market narratives and risks without reading hundreds of articles.',
        image: finSightCover,
        techStack: ['Python', 'FastAPI', 'FinBERT', 'LLM (Groq)', 'Docker', 'Streamlit'],
        github: 'https://github.com/MahboobAlam0/finsight-ai',
    },
    {
        id: 'hmt-ecg-net',
        title: 'HMT-ECGNet: Lightweight ECG AI',
        description: 'A lightweight, hierarchical deep learning architecture for high-performance ECG analysis on edge devices.',
        isNew: true,
        overview: 'A resource-efficient Deep Learning framework designed to bring clinical-grade arrhythmia detection to low-power wearable devices, addressing the constraints of latency and privacy.',
        problem: 'Traditional deep learning models for ECG analysis (like ResNet or Transformers) are often too computationally expensive for wearable devices. They typically require cloud connectivity for inference, which introduces significant latency, privacy risks, and dependency on stable internet connections—critical bottlenecks for real-time health monitoring.',
        solution: `I architected <strong>HMT-ECGNet</strong>, a hierarchical deep learning framework centered on extreme efficiency:
        <br><br>
        <strong>1. Depthwise Separable Convolutions:</strong>
        Standard 1D convolutions (<i>K</i> &times; <i>C<sub>in</sub></i> &times; <i>C<sub>out</sub></i>) were replaced with Depthwise (<i>K</i> &times; 1 &times; <i>C<sub>in</sub></i>) followed by Pointwise (1 &times; <i>C<sub>in</sub></i> &times; <i>C<sub>out</sub></i>) layers. This reduced floating-point operations (FLOPs) by <strong>88%</strong> while preserving the perceptive field.
        <br><br>
        <strong>2. Lead-Wise Attention Mechanism:</strong>
        Instead of concatenating all 12 leads, I implemented a custom attention block:
        <br><code>&alpha;<sub>i</sub> = softmax(W<sub>att</sub> tanh(W<sub>x</sub> x<sub>i</sub> + b<sub>x</sub>))</code><br>
        This computes a scalar importance score <i>&alpha;<sub>i</sub></i> for each lead <i>x<sub>i</sub></i>, allowing the network to dynamically "focus" on leads showing infarction (e.g., Lead II/III for Inferior MI) while ignoring noise.
        <br><br>
        <strong>3. Dynamic Quantization:</strong>
        Post-training, I utilized <code>torch.quantization.quantize_dynamic</code> to map FP32 weights to INT8. This reduced model size from 45MB to <strong>3.2MB</strong>, enabling &lt;10ms inference on Cortex-M4 microcontrollers.`,
        key_results: [
            '<strong>AUROC: 0.98</strong> for Myocardial Infarction detection on the PTB-XL dataset.',
            '<strong>Efficiency:</strong> Outperformed the standard ResNet-1D baseline while using <strong>25x fewer parameters</strong> (0.34M vs 8.7M).',
            '<strong>Inference Speed:</strong> Achieved sub-10ms inference latency on edge-simulated hardware.'
        ],
        impact: 'This architecture enables real-time, privacy-preserving heart monitoring directly on edge devices, removing the need for continuous cloud connectivity and significantly extending battery life for wearables.',
        image: hmtEcgCover,
        techStack: ['PyTorch', 'FastAPI', 'Edge AI', 'Signal Processing'],
        github: 'https://github.com/MahboobAlam0/hmt_ecg_healthmonitoringsystem',
    },
    {
        id: 'urban-mobility-ops',
        title: 'Urban Mobility Operations Center',
        description: 'Scalable ELT pipeline and operations intelligence dashboard for large-scale bike-sharing networks.',

        overview: 'An industrial-grade data engineering project that converts chaotic bike-sharing trip data into actionable operational intelligence, preventing station emptiness and improving fleet rebalancing.',
        problem: 'Managing a bike-sharing network like NYC CitiBike is a logistical nightmare. Demand fluctuates wildly based on weather and rush hours. Stations can go from "full" to "empty" in minutes, blocking users and causing revenue loss. Operational teams are often reactive, scrambling to move bikes only after service disruptions occur.',
        solution: `I engineered a high-throughput <strong>ELT Architecture</strong> designed for fault tolerance and scale:
        <br><br>
        <strong>1. Async Ingestion (Circuit Breaker Pattern):</strong>
        Built a Python <code>asyncio</code> poller that fetches status from 2,000+ stations concurrently. Implemented a <strong>Circuit Breaker</strong> to handle API timeouts gracefully—transitioning to "Open" state after 5 failures to prevent cascading retries during GBFS outages.
        <br><br>
        <strong>2. Window Functions for Drift Analysis:</strong>
        To calculating net flow without expensive self-joins, I utilized SQL Window Functions:
        <br><code>SUM(bikes_available) OVER (PARTITION BY station_id ORDER BY time ROWS BETWEEN 5 PRECEDING AND CURRENT ROW)</code><br>
        This moving window approach smoothed out stochastic noise (e.g., a bike returned and immediately taken) to reveal true depletion trends.
        <br><br>
        <strong>3. Dimensional Modeling (Star Schema):</strong>
        Designed a warehouse with a central <strong>Fact_Station_Status</strong> table linked to <strong>Dim_Time</strong>, <strong>Dim_Station</strong>, and <strong>Dim_Weather</strong>. This pre-computed structure reduced complex analytical query times from ~8s to <strong><400ms</strong> for dashboard rendering.`,
        key_results: [
            '<strong>Real-time Visibility:</strong> Dashboard tracks "Net Inflow/Outflow" to predict station depletion.',
            '<strong>Scalability:</strong> Decoupled logic (CityConfig) allows the same engine to run for NYC, London, or Chicago.',
            '<strong>Reliability:</strong> Automated error handling ensures 99.9% data pipeline uptime.'
        ],
        impact: 'Empowers operations managers to dispatch rebalancing trucks proactively, reducing "empty station" instances and improving user satisfaction.',
        image: urbanMobilityCover,
        techStack: ['Python', 'MySQL', 'Streamlit', 'Docker'],
        github: 'https://github.com/MahboobAlam0/urban-mobility-ops',
        demo: 'https://urbanmobilityops.streamlit.app/',
    },
    {
        id: 'piau-net',
        title: 'Physics-Informed Attention U-Net',
        description: 'Teaching an AI to "see" underwater by embedding optical physics into the neural network.',
        overview: 'A novel computer vision architecture that hybridizes Deep Learning with Optical Physics to restore and segment underwater imagery, overcoming the limitations of standard "physics-blind" models.',
        problem: 'Standard AI models (like U-Net) treat images as simple grids of numbers. They fail in underwater environments because they don\'t understand that green casts are caused by light attenuation, not object color. This "physics blindness" leads to catastrophic failure in varying water conditions.',
        solution: `I developed <strong>PIAU-Net</strong>, a custom architecture that explicitly integrates the <strong>Jaffe-McGlamery Underwater Imaging Model</strong>:
        <br><div style="text-align:center; font-style:italic; margin: 10px 0;">I(x) = J(x)t(x) + A(1 - t(x))</div>
        Where <i>I(x)</i> is the degraded image, <i>J(x)</i> is the scene radiance, <i>t(x)</i> is the transmission map, and <i>A</i> is atmospheric light.
        <br><img src="${piauNetArch}" alt="Architecture" style="width:100%; margin: 1 rem 0; border-radius: 8px;"/><br>
        
        <strong>1. Physics Branch:</strong>
        I designed a parallel CNN branch to estimate <i>t(x)</i> and <i>A</i> independently. These estimates are not just outputs but are fed back into the main U-Net via <strong>Feature Modulation Blocks</strong>, effectively "subtracting" the haze mathematically before segmentation.
        <br><img src="${pbArch}" alt="Physics Branch" style="width:100%; margin: 1rem 0; border-radius: 8px;"/><br>
        
        <br><br>
        <strong>2. Soft Attention Gates:</strong>
        To suppress backscatter noise, I replaced skip connections with Attention Gates:
        <br><code>Output = x * sigmoid(W<sub>g</sub> * g + W<sub>x</sub> * x + b)</code><br>
        This forces the network to assign near-zero weights to the water background, focusing the gradient descent exclusively on the structural edges of marine objects.`,
        key_results: [
            '<strong>Robustness:</strong> Significantly improved segmentation accuracy in turbid and low-light water.',
            '<strong>Generalization:</strong> The physics-guided approach allows the model to perform well on unseen ocean environments without retraining.',
            '<strong>Innovation:</strong> Successfully embedded domain knowledge (optical physics) directly into the neural network topology.'
        ],
        impact: 'Enables autonomous underwater vehicles (AUVs) to navigate and perform inspections more reliably in real-world ocean conditions.',
        image: piauNetCover,
        techStack: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Research'],
        github: 'https://github.com/MahboobAlam0/piaunet',
    },
    {
        id: 'churn-intervention',
        title: 'Business Metric–Driven Churn Intervention',
        description: 'A profit-maximizing predictive model that prioritizes net revenue retention over simple accuracy.',
        overview: 'A strategic shift in predictive analytics: moving from simple binary classification ("Will they churn?") to a value-based decision framework ("Is it profitable to save them?").',
        problem: 'Traditional churn prediction obsesses over accuracy (F1-score). But in business, this is flawed. Offering a $50 discount to save a low-value customer is a net loss. Standard models fail to distinguish between high-value at-risk customers and low-value ones, leading to wasteful retention spending.',
        solution: `I shifted the modeling paradigm from binary classification to <strong>Uplift Modeling</strong> using the "Two-Model" approach (T-Learner):
        <br><code>Uplift = P(Buy | Treatment) - P(Buy | Control)</code><br>
        
        <strong>1. Custom Profit Matrix:</strong>
        I defined a domain-specific Expected Value function to optimize the decision threshold:
        <br><div style="text-align:center; font-style:italic; margin: 10px 0;">E[V] = P(TP) &times; (LTV - C<sub>promo</sub>) - P(FP) &times; C<sub>promo</sub></div>
        Standard F1-maximization would waste budget on "Sure Things" (customers who stay anyway). My model specifically targets "Persuadables"—those with high positive uplift.
        
        <br><br>
        <strong>2. Temporal Velocity Features:</strong>
        Instead of static snapshots, I engineered <strong>derivative features</strong> (e.g., <i>d/dt</i> of login frequency) over 30 and 60-day rolling windows. This captured the <i>acceleration</i> of disengagement, often predicting churn weeks before the actual event.`,
        key_results: [
            '<strong>Cost Reduction:</strong> Reduced retention spend by ~60% compared to blanket intervention strategies.',
            '<strong>Revenue Protection:</strong> Successfully captured and prioritized 80% of the at-risk revenue.',
            '<strong>Strategic Insight:</strong> Provided a clear "Action Matrix" for marketing teams.'
        ],
        impact: 'Transforms data science from a cost center into a direct profit driver by aligning algorithmic objectives with business P&L.',
        image: churnCover,
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Business Intelligence'],
        github: 'https://github.com/MahboobAlam0/businesschurn',
        demo: 'https://businesschurn.streamlit.app/',
    },
    {
        id: 'medical-insurance',
        title: 'Medical Insurance Cost Analysis',
        description: 'Uncovering non-linear logic in insurance pricing using statistical analysis and causal inference.',
        overview: 'An investigative data analysis project probing the "black box" of insurance pricing to uncover hidden interaction effects and non-linear cost multipliers.',
        problem: 'Insurance pricing often feels arbitrary. Why does one person pay 3x more than another? Simple linear models fail to explain these discrepancies because they miss the complex, non-linear interactions between risk factors (e.g., how smoking amplifies the cost of obesity).',
        solution: `I treated the insurance pricing engine as an adversarial "black box" and deployed <strong>Non-Parametric Regression</strong> to reverse-engineer it:
        
        <br><br>
        <strong>1. Discovery via Decision Trees:</strong>
        I fit a single <code>DecisionTreeRegressor(max_depth=3)</code> to visualize the primary splits. This immediately revealed a boolean interaction node:
        <br><code>if (BMI > 30) AND (Smoker == True) then Cost += $20,000</code><br>
        This proved the existence of a non-linear multiplier that linear models (<i>y = mx + b</i>) fundamentally fail to capture.
        
        <br><br>
        <strong>2. Causal Inference with PDPs:</strong>
        I generated <strong>Partial Dependence Plots (PDP)</strong> to distinguish separating variables. By holding all other features constant and integrating out their marginal distributions, I isolated the pure causal effect of "Children" on cost, proving a step-function relationship rather than a linear one.`,
        key_results: [
            '<strong>Interaction Discovery:</strong> Quantified the "Smoker-BMI" multiplier effect.',
            '<strong>Model Accuracy:</strong> Improved cost prediction accuracy from 78% (Linear) to 85% (Random Forest).',
            '<strong>Interpretability:</strong> Provided visual evidence of why costs jump for specific demographic combinations.'
        ],
        impact: 'Demonstrated how non-linear modeling can bring transparency and explainability to complex financial algorithms.',
        image: insuranceCover,
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
        github: 'https://github.com/MahboobAlam0/medicalinsurancecostanalysis',
        demo: 'https://medicalinsurancecostanalysis0.streamlit.app',
    }
];
