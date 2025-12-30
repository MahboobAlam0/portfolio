import churnImage from '../assets/images/ProjectImages/Churn.png';
import medicalInsuranceImage from '../assets/images/ProjectImages/MedicalImage.jpeg';

export const projectsData = [
    {
        id: 'churn-intervention',
        title: 'Business Metric–Driven Churn Intervention',
        description: 'A system that didn’t just predict churn, but calculated the exact ROI of saving each customer.',
        fullDescription: `
            <h3>The Problem</h3>
            <p>Most churn prediction models stop at "Who will leave?". But businesses don't have infinite budgets to save everyone. I wanted to answer a harder question: <em>"Who is worth saving?"</em></p>
            
            <h3>My Solution</h3>
            <p>I built a pipeline that combines standard churn probability (using Scikit-learn) with Customer Lifetime Value (CLV). The system simulates different intervention strategies (e.g., offering a $10 discount vs. a $50 discount) to find the sweet spot where the cost of the intervention is lower than the profit retained.</p>
            
            <h3>Key Takeaways</h3>
            <ul>
                <li><strong>Real-world Impact:</strong> Identified the top 20% high-risk customers who actually drive 80% of the revenue loss.</li>
                <li><strong>Tech Stack:</strong> Heavy use of Pandas for the financial logic and Streamlit for visualizing the "Money Saved" metric real-time.</li>
            </ul>
        `,
        image: churnImage,
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
        image: medicalInsuranceImage,
        techStack: ['Python', 'Linear Regression', 'Pandas'],
        github: 'https://github.com/MahboobAlam0/medicalinsurancecostanalysis',
        demo: 'https://medicalinsurancecostanalysis0.streamlit.app',
    }
];
