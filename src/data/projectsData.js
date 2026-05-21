import pbArch from '../assets/images/ArchitectureImages/PB_Architecture.png';

// Cover Images
import churnCover from '../assets/images/ProjectImages/Churn_Cover.png';
import insuranceCover from '../assets/images/ProjectImages/Insurance_Cover.png';
import piauNetCover from '../assets/images/ProjectImages/PIAUNet_Cover.png';
import urbanMobilityCover from '../assets/images/ProjectImages/UrbanMobility_Cover.png';
import finSightCover from '../assets/images/ProjectImages/FinSight_Cover.png';
import hmtEcgCover from '../assets/images/ProjectImages/HMT_ECG_Cover.png';
import arduPilotCover from '../assets/images/ProjectImages/ArduPilot_Cover.png';

// New SVG Covers (generated)
import liteFishSegCover from '../assets/images/ProjectImages/litefishseg_cover.png';
import fishSegDetCover from '../assets/images/ProjectImages/fishsegdet_cover.png';
import distillCover from '../assets/images/ProjectImages/distill_cover.png';
import clinicalRagCover from '../assets/images/ProjectImages/clinicalrag_cover.png';
import researchKitCover from '../assets/images/ProjectImages/researchkit_cover.png';
import fishMonitoringCover from '../assets/images/ProjectImages/fishmonitoring_cover.png';
// Architecture Images (also used as covers for new projects)
import litefishsegOverview from '../assets/images/ArchitectureImages/architecture_overview_litefishseg.png';
import litefishsegBackbone from '../assets/images/ArchitectureImages/architecture_backbone_litefishseg.png';
import fishsegdetOverview from '../assets/images/ArchitectureImages/architecture_overview_fishsegdet.png';
import fishsegdetBackbone from '../assets/images/ArchitectureImages/architecture_backbone_fishsegdet.png';
import fishsegdetNeck from '../assets/images/ArchitectureImages/architecture_neck_fishsegdet.png';
import fishsegdetHeads from '../assets/images/ArchitectureImages/architecture_heads_fishsegdet.png';
import piaunetOverall from '../assets/images/ArchitectureImages/piaunet_overall.png';

export const projectsData = [
    // ── NEW TODAY ──────────────────────────────────────────────────────────
    {
        id: 'lite-fish-seg',
        title: 'LiteFishSeg: Edge-Optimized Fish Instance Segmentation',
        description: 'A lightweight deep learning model for real-time joint detection and instance segmentation of marine life on edge hardware — 22× fewer parameters than FishSegDet.',
        isNew: true,
        overview: 'A resource-efficient deep learning framework for <strong>real-time fish detection and instance segmentation</strong> on resource-constrained edge devices. Designed as a lightweight counterpart to FishSegDet, it achieves competitive segmentation performance at a fraction of the computational cost, making AI-driven marine monitoring viable on vessel-mounted hardware.',
        problem: 'High-accuracy marine segmentation models like FishSegDet demand 200M+ parameters — far too heavy for deployment on vessel-mounted edge devices or offshore buoys. Aquaculture operators and marine biologists need on-device inference without cloud dependency, but standard edge-optimized models sacrifice too much accuracy for reliable species-level analysis.',
        solution: `I re-engineered the FishSegDet architecture for extreme efficiency through four targeted optimizations:
        <br><br>
        <img src="${litefishsegOverview}" alt="LiteFishSeg Architecture Overview" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>1. Lightweight Backbone — MobileNetV3-Large:</strong>
        Replaced ConvNeXtV2-Large with <strong>MobileNetV3-Large</strong>, reducing backbone parameters by ~95% while preserving multi-scale feature extraction through depthwise separable convolutions.
        <br><br>
        <strong>2. Compressed BiFPN Neck:</strong>
        Halved BiFPN channels from 256 → 128, cutting neck FLOPs by ~75% while retaining bidirectional multi-scale feature fusion.
        <br><img src="${litefishsegBackbone}" alt="LiteFishSeg Backbone Design" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>3. Smaller Mask Prototypes:</strong>
        Reduced YOLACT-style mask prototype dimensions from 128 → 64, halving mask branch compute with negligible boundary quality loss.
        <br><br>
        <strong>4. Resolution Reduction:</strong>
        Operates at 512px vs. 640px, providing a 36% reduction in input FLOPs. Early stopping applied to FCOS + Focal Loss training to prevent overfitting on the smaller backbone.`,
        key_results: [
            '<strong>9.08M Parameters</strong> — 22× fewer than FishSegDet (204.75M)',
            '<strong>mIoU: 80.30% | Dice: 81.51% | mAP₅₀: 73.72%</strong> on held-out test set',
            '<strong>2.7× fewer parameters</strong> than YOLOv10l-seg while maintaining competitive segmentation quality'
        ],
        impact: 'Enables real-time fish monitoring on low-power vessel hardware and offshore buoys, making AI-driven aquaculture surveillance accessible without cloud connectivity or expensive GPU hardware.',
        image: liteFishSegCover,
        techStack: ['PyTorch', 'MobileNetV3', 'BiFPN', 'Edge AI', 'Computer Vision'],
        github: 'https://github.com/MahboobAlam0/LiteFishSeg',
    },
    {
        id: 'fish-seg-det',
        title: 'FishSegDet: Unified Detection & Semantic Segmentation',
        description: 'A unified deep learning framework for simultaneous fish bounding-box detection and semantic segmentation in a single forward pass, outperforming YOLOv11l-seg by +7 mAP points.',
        isNew: true,
        overview: 'A state-of-the-art <strong>joint detection and segmentation framework</strong> for underwater marine species analysis. FishSegDet outputs both bounding-box localizations and pixel-level semantic masks in a single forward pass — enabling simultaneous fish tracking and biomass estimation under challenging underwater optical conditions.',
        problem: 'Underwater fish analysis requires two complementary outputs: bounding boxes for tracking individual fish, and pixel-level masks for biomass estimation. Running separate models doubles latency and compute. Standard architectures also fail underwater due to wavelength absorption, turbidity, caustic scattering, and extreme class imbalance between species.',
        solution: `I engineered a purpose-built architecture combining a high-capacity backbone, multi-scale fusion, and specialized decoder heads:
        <br><br>
        <img src="${fishsegdetOverview}" alt="FishSegDet Architecture Overview" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>1. Backbone — ConvNeXtV2-Large:</strong>
        Pre-trained on ImageNet, its depthwise convolutions and Global Response Normalization (GRN) layers provide strong, generalizable feature representations across diverse fish species and water conditions.
        <br><img src="${fishsegdetBackbone}" alt="FishSegDet Backbone" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>2. Neck — BiFPN (P3–P6, 256 channels):</strong>
        Bidirectional Feature Pyramid Network fuses multi-scale features with learned weighted paths, outperforming standard FPN at detecting both small juvenile fish and large adults in the same frame.
        <br><img src="${fishsegdetNeck}" alt="FishSegDet BiFPN Neck" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>3. Dual Output Heads:</strong>
        Distribution Focal Loss (DFL) regression with IoU-aware soft label classification for boxes; FPN + ASPP decoder for full-resolution semantic masks. Both heads share the BiFPN features, adding zero backbone compute for the second task.
        <br><img src="${fishsegdetHeads}" alt="FishSegDet Detection & Segmentation Heads" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>4. Curriculum Training:</strong>
        3-phase training with class-balanced sampling and underwater preprocessing pipeline (white balance → CLAHE → gamma correction) to handle the unique optical degradation of underwater environments.`,
        key_results: [
            '<strong>mAP: 74.34%</strong> (+7.04 pp vs. YOLOv11l-seg) | <strong>mAP₅₀: 97.73%</strong> (+9.73 pp)',
            '<strong>mIoU: 94.41%</strong> (+7.96 pp) | <strong>Pixel Accuracy: 99.30%</strong>',
            '<strong>Single forward pass</strong> for both detection and segmentation — no dual-model overhead'
        ],
        impact: 'Enables autonomous underwater vehicles (AUVs) and aquaculture management platforms to accurately count, track, and measure fish populations simultaneously, replacing two separate model pipelines with one.',
        image: fishSegDetCover,
        techStack: ['PyTorch', 'ConvNeXtV2', 'BiFPN', 'DFL', 'ASPP', 'Computer Vision'],
        github: 'https://github.com/MahboobAlam0/FishSegDet',
    },
    // ── LLM / RAG PROJECTS ────────────────────────────────────────────────
    {
        id: 'distill-qwen-text2sql',
        title: 'Distill: Fine-tuning Qwen2.5-3B for Text-to-SQL',
        description: 'Achieves a 13× accuracy improvement on text-to-SQL by fine-tuning a 3B model with QLoRA on a free T4 GPU — proving focused fine-tuning can rival expensive large models.',
        isNew: false,
        overview: 'A rigorous study in <strong>efficient LLM fine-tuning</strong>: converting natural language questions into executable SQL using a 3B parameter model trained with QLoRA on free Kaggle hardware. Demonstrates that disciplined fine-tuning on accessible compute can achieve production-grade text-to-SQL without GPT-4 or 70B-scale models.',
        problem: 'Most text-to-SQL deployments default to GPT-4 or 70B+ models, demanding expensive inference infrastructure impractical for on-premise deployments. The core question: can a 3B model, fine-tuned on free hardware, close the gap with large commercial models through a principled training recipe?',
        solution: `I applied <strong>QLoRA (Quantized Low-Rank Adaptation)</strong> to Qwen2.5-3B-Instruct with a carefully tuned regime:
        <br><br>
        <strong>1. 4-bit NF4 Quantization:</strong>
        Using <code>BitsAndBytes</code>, the base model is loaded in 4-bit NF4 quantization — reducing memory footprint from 6 GB to ~1.8 GB, making training viable on a single free T4 GPU.
        <br><br>
        <strong>2. Targeted LoRA Adapters:</strong>
        Applied LoRA adapters (<code>r=16, alpha=32</code>) to <code>q_proj</code>, <code>k_proj</code>, <code>v_proj</code>, and <code>up_proj</code> layers — the minimum surface needed to reshape SQL generation behavior without touching the frozen backbone. Final adapter size: 114 MB vs. 6 GB full model.
        <br><br>
        <strong>3. Curriculum & Early Stopping:</strong>
        Trained on 28,000 curated Spider dataset examples. Crucially, early stopping at step 200 was identified through eval monitoring — longer training degraded exact match due to overfitting on SQL syntax patterns rather than learning semantic generalization.
        <br><br>
        <strong>4. Production Deployment:</strong>
        Adapter merged back to full precision for serving via <strong>FastAPI</strong> (<code>/generate</code> endpoint), with an interactive <strong>Streamlit</strong> schema editor UI, all containerized via Docker Compose for one-command deployment.`,
        key_results: [
            '<strong>Exact Match: 2.33% → 30.67%</strong> (13× improvement post fine-tuning)',
            '<strong>Execution Accuracy: 55.03%</strong> (semantic SQL correctness on held-out test set)',
            '<strong>Adapter: 114 MB</strong> vs. 6 GB full model | ~2 hours training on a free T4 GPU'
        ],
        impact: 'Delivers a fully reproducible, zero-cost fine-tuning pipeline for text-to-SQL, enabling teams to deploy capable SQL AI on on-premise hardware without cloud API dependency or 70B-scale compute.',
        image: distillCover,
        techStack: ['QLoRA', 'Qwen2.5-3B', 'PEFT', 'BitsAndBytes', 'FastAPI', 'Docker'],
        github: 'https://github.com/MahboobAlam0/Distill---Fine-tuned-Qwen2.5-3B',
    },
    {
        id: 'clinical-rag',
        title: 'Clinical RAG: Evidence-Based Medical QA',
        description: 'A retrieval-augmented QA system grounded in 5,355 PubMed abstracts, delivering cited medical answers with confidence scores and explicit uncertainty quantification.',
        isNew: false,
        overview: 'A production-grade <strong>Retrieval-Augmented Generation (RAG) system</strong> for evidence-based medical question answering. It retrieves semantically relevant PubMed abstracts, generates answers strictly grounded in retrieved evidence, and returns source citations with numeric confidence scores — refusing to speculate outside its evidence base.',
        problem: 'General-purpose LLMs hallucinate medical facts. Clinicians and researchers need a system that grounds every answer in verifiable literature, quantifies evidential support, and explicitly refuses when a question falls outside the scope of available evidence — behavior that is the exact opposite of standard chatbot defaults.',
        solution: `I built a <strong>domain-adapted RAG pipeline</strong> with every component optimized for medical retrieval quality and answer reliability:
        <br><br>
        <strong>1. Fine-tuned Medical Embeddings:</strong>
        Fine-tuned a <code>SentenceTransformer</code> on PubMedQA using <strong>MultipleNegativesRankingLoss</strong>, training the embedding model to understand medical terminology nuances and distinguish between similar-sounding conditions. Boosted nDCG@10 from 0.806 → <strong>0.926</strong>.
        <br><br>
        <strong>2. Semantic Retrieval (Qdrant):</strong>
        Indexed 5,355 PubMed abstracts using the fine-tuned embeddings in Qdrant. Cosine similarity search retrieves the top-k most semantically relevant passages in milliseconds, with configurable recall/precision tradeoff.
        <br><br>
        <strong>3. Grounded Generation with Confidence Scoring:</strong>
        <strong>Groq Llama-3.3-70B</strong> generates answers strictly grounded in retrieved chunks with explicit citations. Confidence is derived from maximum cosine similarity of retrieved passages — giving users a numeric signal of evidential support. Streaming via Server-Sent Events.
        <br><br>
        <strong>4. Reliability Engineering:</strong>
        <strong>256-slot LRU caching</strong> for identical queries, retry logic with exponential backoff for API rate limits, and hard refusal logic when maximum similarity falls below the confidence threshold — ensuring the system never fabricates evidence.`,
        key_results: [
            '<strong>nDCG@10: 0.806 → 0.926</strong> (+12%) after domain-specific embedding fine-tuning',
            '<strong>Accuracy@10: 0.903 → 1.000</strong> (+9.7%) on PubMedQA retrieval benchmark',
            '<strong>API Latency: ~874ms</strong> per query end-to-end with streaming support'
        ],
        impact: 'Provides a transparent, source-cited alternative to general LLMs for clinical literature review, directly reducing the risk of acting on hallucinated medical information in research and clinical decision support.',
        image: clinicalRagCover,
        techStack: ['RAG', 'Qdrant', 'LLM (Groq)', 'SentenceTransformers', 'FastAPI', 'Docker'],
        github: 'https://github.com/MahboobAlam0/ai-clinical-rag',
    },
    {
        id: 'research-toolkit',
        title: 'ResearchKit AI: Private Research Intelligence',
        description: 'A self-hosted research platform with RAG-powered paper chat, literature synthesis, and AI skill-gap analysis — without sending unpublished work to external servers.',
        isNew: false,
        overview: 'A <strong>private, self-hosted research intelligence platform</strong> for ML/DS professionals. It combines a personal paper library with semantic search, LLM-powered synthesis, and career development tools — all running locally to keep sensitive and unpublished research confidential.',
        problem: 'Existing research tools are fragmented and leaky: Zotero has no AI, cloud platforms (Elicit, ChatPDF) send unpublished work to external servers creating IP risks, and no unified tool connects literature review with career skill-gap analysis. Researchers waste hours context-switching between disconnected tools.',
        solution: `ResearchKit AI unifies the entire research workflow in one privacy-first system:
        <br><br>
        <strong>1. Semantic Search Engine:</strong>
        Uses <strong>BAAI/bge-base-en-v1.5 embeddings</strong> stored in a local <strong>Qdrant vector database</strong> for sub-second semantic retrieval across an entire paper library. Supports one-click <strong>Zotero import</strong> for instant collection migration.
        <br><br>
        <strong>2. RAG-Powered Paper Chat:</strong>
        A <strong>FastAPI backend</strong> orchestrates retrieval-augmented generation using <strong>Groq's LLaMA 3.3 70B</strong>. Users can ask questions against their collection and receive cited, grounded answers — not hallucinations. PyMuPDF handles PDF parsing and chunking.
        <br><br>
        <strong>3. Literature Synthesis:</strong>
        Automatically synthesizes multiple papers into structured literature reviews, surfacing consensus findings, contradictions, and open research questions across a user's entire collection.
        <br><br>
        <strong>4. AI Skill-Gap Analysis:</strong>
        Compares the technical vocabulary and research themes in a user's paper collection against a target job description to identify missing competencies and recommend specific papers to bridge the gap.`,
        key_results: [
            '<strong>Privacy-First:</strong> All embeddings and data stay local — no unpublished work sent to external servers',
            '<strong>Full-Stack:</strong> FastAPI backend + Chrome MV3 Extension + Vanilla JS Web UI + Docker Compose',
            '<strong>33 Passing Tests</strong> covering RAG pipeline, API endpoints, and search functionality'
        ],
        impact: 'Democratizes institutional-grade research tooling for independent researchers and academics who need AI-powered literature management without sacrificing research confidentiality or IP.',
        image: researchKitCover,
        techStack: ['FastAPI', 'Qdrant', 'LLM (Groq)', 'BGE Embeddings', 'Docker'],
        github: 'https://github.com/MahboobAlam0/research-toolkit',
    },
    // ── MARINE / COMPUTER VISION ──────────────────────────────────────────
    {
        id: 'fish-monitoring-system',
        title: 'Fish Density Monitoring System',
        description: 'A real-time web dashboard for underwater fish population monitoring with zonal density heatmaps, automated threshold alerts, and Seg-Grad-CAM explainability — powered by PIAUNet.',
        isNew: false,
        overview: 'An end-to-end <strong>deployed aquaculture intelligence system</strong> that analyzes underwater images and video to count fish populations, map spatial density across a configurable zone grid, and trigger automated alerts when thresholds are breached — with full model explainability via Seg-Grad-CAM.',
        problem: 'Aquaculture managers face a critical operational blind spot: they cannot quickly assess fish density distribution across a large tank or pond from live video feeds. Manual counting is impossible at scale, overcrowding goes undetected until fish health deteriorates, and generic CV tools lack the underwater robustness needed for reliable production use.',
        solution: `The system is built on a production-hardened inference pipeline deployed on Hugging Face Spaces:
        <br><br>
        <img src="${piaunetOverall}" alt="PIAUNet Architecture Powering the System" style="width:100%; margin: 1rem 0; border-radius: 8px;"/>
        <br>
        <strong>1. Physics-Informed Backbone (PIAU-Net):</strong>
        The inference engine is powered by <strong>PIAU-Net</strong>, which embeds the Jaffe-McGlamery underwater optical model into its attention gates — enabling robust segmentation despite turbidity, backscatter, and color cast distortion across varied water conditions.
        <br><br>
        <strong>2. Robust Inference Pipeline:</strong>
        Implements <strong>sliding window inference</strong> (4 overlapping 60% patches) to catch small fish missed by global inference, <strong>temporal voting</strong> (3-frame majority filter) to eliminate transient false detections, and <strong>adaptive confidence-margin thresholding</strong> to suppress noise near decision boundaries.
        <br><br>
        <strong>3. Zonal Density Grid:</strong>
        A configurable M×N spatial grid divides each frame into zones. Each cell is color-coded (green → yellow → red) by fish count, with automated alerts firing when user-defined density thresholds are exceeded — enabling proactive rebalancing decisions.
        <br><br>
        <strong>4. Seg-Grad-CAM Explainability:</strong>
        Gradient-weighted class activation mapping overlays show exactly which image regions drove each detection decision, building operator trust and enabling failure-mode diagnosis.`,
        key_results: [
            '<strong>mIoU: 97.38% | Dice: 98.18%</strong> on the Large-Scale Fish Dataset',
            '<strong>Pixel Accuracy: 99.54%</strong> | Precision: 98.83% | Recall: 98.53%',
            '<strong>Live deployed</strong> on Hugging Face Spaces with real-time image and video analysis'
        ],
        impact: 'Gives aquaculture operators a real-time operational dashboard to detect zonal overcrowding, monitor feeding area utilization, and trigger interventions before fish health is compromised.',
        image: fishMonitoringCover,
        techStack: ['PyTorch', 'PIAU-Net', 'Gradio', 'Seg-Grad-CAM', 'Hugging Face'],
        github: 'https://github.com/MahboobAlam0/fish-monitoring-system-using-piaunet',
        demo: 'https://huggingface.co/spaces/mahboobalam0/fish-density-monitoring-system',
    },
    // ── DEVOPS / NLP / DATA ENGINEERING ──────────────────────────────────
    {
        id: 'ardupilot-devops',
        title: 'ArduPilot CI/CD: SITL Automation Pipeline',
        description: 'A production-grade CI/CD pipeline for safety-critical drone software, automating SITL simulation and MAVLink validation via Docker.',
        isNew: false,
        overview: 'A robust <strong>DevOps Automation Pipeline</strong> for the ArduPilot ecosystem that replaces risky manual testing with automated <strong>Software-In-The-Loop (SITL)</strong> validation. It ensures every code change is flight-tested in a virtual environment before deployment.',
        problem: 'Drone autopilot firmware is safety-critical; a single bug can cause physical crashes and hardware destruction ($500+ loss). Manual testing is inconsistent, time-consuming, and unscalable. Developers needed a way to validate mission-critical logic without risking actual hardware.',
        solution: `I engineered a containerized <strong>CI/CD Pipeline</strong> using GitHub Actions and Docker to fully automate the testing lifecycle:
        <br><br>
        <strong>1. Ephemeral Test Environments (Docker):</strong>
        Created a custom Docker image that pre-builds the ArduPilot firmware and SITL simulator. This guarantees a consistent, reproducible testing environment, eliminating "it works on my machine" issues and dependency conflicts.
        <br><br>
        <strong>2. Automated MAVLink Validation:</strong>
        Developed a Python-based testing suite using <code>pymavlink</code> that connects to the simulated drone via TCP. It autonomously validates heartbeat signals, vehicle mode transitions, and system health status.
        <br><br>
        <strong>3. Fail-Fast Pipeline Architecture:</strong>
        Implemented a strict quality gate in GitHub Actions. If the SITL simulation fails to stabilize or the heartbeat is missed within a defined timeout, the pipeline immediately blocks the merge, preventing broken code from reaching the main branch.`,
        key_results: [
            '<strong>Zero-Hardware Testing:</strong> Validates complex flight logic without risking physical drones.',
            '<strong>Automated Assurance:</strong> Reduces regression testing time from hours of manual flight to minutes of automated simulation.',
            '<strong>Production Readiness:</strong> Implements industry-standard DevOps practices for embedded systems.'
        ],
        impact: 'Demonstrates how modern DevOps principles can be applied to embedded systems, ensuring safety and reliability in critical autonomous vehicle software.',
        image: arduPilotCover,
        techStack: ['Docker', 'GitHub Actions', 'Python', 'ArduPilot SITL', 'MAVLink'],
        github: 'https://github.com/MahboobAlam0/ardupilot_devops',
    },
    {
        id: 'finsight-ai',
        title: 'FinSight: Financial Sentiment & Narrative Intelligence System',
        description: 'An automated market intelligence pipeline that ingests raw news, quantifies financial sentiment using FinBERT, and synthesizes strategic insights using LLMs.',
        isNew: false,
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
        isNew: false,
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
        <br><img src="${piaunetOverall}" alt="Architecture" style="width:100%; margin: 1rem 0; border-radius: 8px;"/><br>

        <strong>1. Physics Branch:</strong>
        I designed a parallel CNN branch to estimate <i>t(x)</i> and <i>A</i> independently. These estimates are not just outputs but are fed back into the main U-Net via <strong>Feature Modulation Blocks</strong>, effectively "subtracting" the haze mathematically before segmentation.
        <br><img src="${pbArch}" alt="Physics Branch" style="width:100%; margin: 1rem 0; border-radius: 8px;"/><br>

        <br><br>
        <strong>2. Soft Attention Gates:</strong>
        To suppress backscatter noise, I replaced skip connections with Attention Gates:
        <br><code>Output = x * sigmoid(W<sub>g</sub> * g + W<sub>x</sub> * x + b)</code><br>
        This forces the network to assign near-zero weights to the water background, focusing the gradient descent exclusively on the structural edges of marine objects.`,
        key_results: [
            '<strong>mIoU: 97.38% | Dice: 98.18%</strong> on the Large-Scale Fish Dataset',
            '<strong>Pixel Accuracy: 99.54%</strong> | Outperforms U-Net, Attention U-Net, and DeepLab V3+',
            '<strong>AquaOV255 (fine-tuned): mIoU 93.98% | Pixel Accuracy 98.41%</strong> — generalizes across water types'
        ],
        impact: 'Enables autonomous underwater vehicles (AUVs) to navigate and perform inspections more reliably in real-world ocean conditions, with model weights publicly available on Hugging Face.',
        image: piauNetCover,
        techStack: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Research'],
        github: 'https://github.com/MahboobAlam0/piaunet',
        demo: 'https://huggingface.co/mahboobalam0/piaunet',
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
