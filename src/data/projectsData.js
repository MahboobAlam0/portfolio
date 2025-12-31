import piauNetArch from '../assets/images/ProjectImages/Architecture.jpg';
import pbArch from '../assets/images/ProjectImages/PB_Architecture.png';

// New Cover Images
import churnCover from '../assets/images/ProjectImages/Churn_Cover.png';
import insuranceCover from '../assets/images/ProjectImages/Insurance_Cover.png';
import piauNetCover from '../assets/images/ProjectImages/PIAUNet_Cover.png';

export const projectsData = [
    {
        id: 'churn-intervention',
        title: 'Business Metric–Driven Churn Intervention',
        description: 'A system that didn’t just predict churn, but calculated the exact ROI of saving each customer.',
        fullDescription: `
            <h3>Overview</h3>
            <p>Customer churn prediction by itself rarely creates business value. Retention actions such as discounts, loyalty offers, or customer support interventions come with real costs, and blindly targeting every high-risk customer often leads to wasted spend.</p>
            <p>This project reframes churn modeling as a business decision problem, not just a classification task. Instead of asking “Who will churn?”, the system answers: <em>“Which customers should the business actively intervene on to maximize net revenue?”</em></p>
            <p>The solution combines churn probability, customer lifetime value (CLV), and intervention cost to produce actionable, cost-aware retention decisions.</p>

            <h3>Problem Statement</h3>
            <p>Most churn projects stop at predicting whether a customer will leave. In practice, this approach has two major flaws:</p>
            <ul>
                <li><strong>Retention actions are not free:</strong> Offers, discounts, and service calls have costs.</li>
                <li><strong>Not all customers are equally valuable:</strong> Saving a low-value customer may cost more than it returns.</li>
            </ul>
            <p>The business problem addressed in this project is: <strong>How can we identify customers who are both likely to churn and financially worth saving, while avoiding unnecessary retention costs?</strong></p>

            <h3>Solution Design</h3>
            <p>The system follows a production-inspired design with a clear separation between model training, inference, and business decisioning.</p>
            
            <h4>High-Level Architecture</h4>
            <pre>
Offline Training
└── train_model.py
    ↓
    churn_model.pkl (saved model)

Batch Inference & Decisioning
└── main.py
    ↓
    churn probabilities
    ↓
    CLV + cost-based business logic
    ↓
    Retention decisions & impact analysis
            </pre>
            <p>This structure mirrors how churn systems are typically implemented in real organizations.</p>

            <h3>Modeling Approach</h3>
            <p><strong>Model Choice:</strong> A Logistic Regression model is used for churn prediction. This choice is intentional: it focuses on decision quality and interpretability rather than just marginal accuracy gains.</p>
            
            <h4>Business Logic</h4>
            <ul>
                <li><strong>CLV Approximation:</strong> <code>CLV = MonthlyCharges × RemainingMonths × ContributionMargin</code> (Conservative approach to avoid overstating impact).</li>
                <li><strong>Expected Net Gain:</strong> <code>NetGain = (P(churn) × CLV) - InterventionCost</code>. This allows the system to explicitly compare expected benefit vs cost.</li>
            </ul>

            <h3>Customer Segmentation Results</h3>
            <p>Based on churn probability and net gain, customers are segmented into:</p>
            <ul>
                <li><strong>green (Saveable):</strong> High churn risk and positive expected net gain. (Top priority)</li>
                <li><strong>Loyal:</strong> Low churn risk; no intervention required.</li>
                <li><strong>Not Worth Saving:</strong> High churn risk but negative net gain (Intervention costs exceed value).</li>
            </ul>
            <p>When applied to the full customer base, approximately <strong>20%</strong> of customers were classified as "Saveable", while <strong>75–80%</strong> were "Loyal", allowing the business to focus spend efficiently.</p>

            <h3>Key Takeaways</h3>
            <ul>
                <li>Churn prediction alone is insufficient for effective retention strategies.</li>
                <li>Business decisions should be driven by expected value, not just accuracy metrics.</li>
                <li>Simple, interpretable models combined with strong business logic can outperform complex but misaligned approaches.</li>
            </ul>
        `,
        image: churnCover,
        techStack: ['Python', 'Scikit-learn', 'Streamlit'],
        github: 'https://github.com/MahboobAlam0/businesschurn',
        demo: 'https://businesschurn.streamlit.app/',
    },
    {
        id: 'medical-insurance',
        title: 'Medical Insurance Cost Analysis',
        description: 'Digging into the data to see why some people pay 3x more for insurance than others.',
        fullDescription: `
            <h3>The Goal</h3>
            <p>I wanted to understand the black box of insurance pricing. Is it just age? Or does smoking status really double the cost?</p>
            
            <h3>What I Found</h3>
            <p>After running extensive EDA and regression models, the data was clear: <strong>Smoking + High BMI</strong> acts as a multiplier, not just an addition. A smoker with high BMI pays significantly more than the sum of the two individual factors.</p>
            
            <h3>Technical Details</h3>
            <ul>
                <li><strong>Model Performance:</strong> Achieved ~78% accuracy (R-squared) using Linear Regression, but Random Forest boosted this to ~85% by capturing the non-linear interactions I discovered.</li>
                <li><strong>Visuals:</strong> Used Matplotlib to plot the cost disparity, making the "Smoker Premium" immediately visible.</li>
            </ul>
        `,
        image: insuranceCover,
        techStack: ['Python', 'Linear Regression', 'Pandas'],
        github: 'https://github.com/MahboobAlam0/medicalinsurancecostanalysis',
        demo: 'https://medicalinsurancecostanalysis0.streamlit.app',
    },
    {
        id: 'piau-net',
        title: 'Physics-Informed Attention U-Net (PIAU-Net)',
        description: 'An enhanced U-Net framework for underwater segmentation that integrates optical physics priors.',
        fullDescription: `
            <h3>Overview</h3>
            <p>Standard encoder–decoder segmentation networks rely purely on appearance-based learning. In many real-world optical imaging scenarios, however, image formation is governed by physical processes such as light attenuation, scattering, and backscatter. Ignoring these effects often leads to unstable predictions under varying illumination.</p>
            <p><strong>PIAU-Net</strong> addresses this limitation by embedding physics awareness directly into the pipeline through:</p>
            <ul>
                <li>A <strong>Physics Branch</strong> that learns physically meaningful cues</li>
                <li><strong>Physics-Informed Attention Gates (PAGs)</strong> that regulate skip connections</li>
                <li>A <strong>Physics-Guided Loss Function</strong> that enforces physical consistency during training</li>
            </ul>
            <p>The result is a segmentation model that is more robust, interpretable, and illumination-aware than conventional U-Net variants.</p>

            <h3>Key Contributions</h3>
            <ul>
                <li><strong>Physics-Informed Architecture:</strong> A modified U-Net that integrates physics-derived feature maps into the decoding process via attention gating.</li>
                <li><strong>Physics-Aware Attention Gates (PAGs):</strong> Skip connections are selectively filtered using physics-based cues, suppressing unreliable features caused by illumination distortions.</li>
                <li><strong>Physics-Guided Loss Function:</strong> Training is regularized using a physics-consistency term in addition to standard segmentation loss, improving stability and boundary accuracy.</li>
            </ul>

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
                <li><strong>Physics-Informed Attention Gates:</strong> Use physics features as gating signals to refine skip-connection information before fusion with the decoder.</li>
                <li><strong>Decoder:</strong> Reconstructs spatial details using upsampling and gated skip connections.</li>
            </ul>

            <h3>Physics-Guided Learning</h3>
            <p>The attention mechanism is not purely data-driven. Physics-derived features guide the gating process to:</p>
            <ul>
                <li>Suppress features from low-visibility or physically inconsistent regions</li>
                <li>Emphasize regions with reliable optical information</li>
                <li>Improve boundary localization under illumination changes</li>
            </ul>
        `,
        image: piauNetCover,
        techStack: ['PyTorch', 'Computer Vision', 'Deep Learning'],
        github: 'https://github.com/MahboobAlam0/piaunet',
        demo: null,
    }
];
