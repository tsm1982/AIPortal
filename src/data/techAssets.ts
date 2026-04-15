export interface AssetFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

export interface TechAsset {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  features: string[];
  url?: string;
  files?: AssetFile[];
}

export const techAssets: TechAsset[] = [
  {
    id: "t1",
    name: "AI模型服务平台",
    description: "基于云原生的AI模型服务平台，提供模型训练、部署、推理等全生命周期管理",
    category: "AI平台",
    icon: "🤖",
    tags: ["模型训练", "模型部署", "在线推理", "AutoML"],
    features: [
      "模型训练：分布式训练与超参调优",
      "模型部署：一键部署与版本管理",
      "在线推理：高并发推理服务",
      "AutoML：自动化模型搜索",
    ],
    files: [
      { id: "tf1", name: "AI模型服务平台产品介绍.pdf", type: "pdf", size: "2.5MB", url: "#", uploadTime: "2024-03-15" },
      { id: "tf2", name: "API接口文档.docx", type: "doc", size: "1.8MB", url: "#", uploadTime: "2024-03-10" },
      { id: "tf3", name: "架构设计图.png", type: "image", size: "2.2MB", url: "#", uploadTime: "2024-03-08" },
    ],
  },
  {
    id: "t2",
    name: "数据中台",
    description: "企业级数据集成与管理平台，支持多源异构数据的采集、治理与服务化",
    category: "数据平台",
    icon: "🗄️",
    tags: ["数据集成", "数据治理", "数据服务", "数据血缘"],
    features: [
      "数据集成：多源异构数据快速接入",
      "数据治理：数据质量与标准化管理",
      "数据服务：API化数据输出",
      "数据血缘：全链路数据追溯",
    ],
    files: [
      { id: "tf4", name: "数据中台技术白皮书.pdf", type: "pdf", size: "3.8MB", url: "#", uploadTime: "2024-03-12" },
      { id: "tf5", name: "数据模型设计文档.vsd", type: "diagram", size: "4.5MB", url: "#", uploadTime: "2024-03-08" },
    ],
  },
  {
    id: "t3",
    name: "区块链服务平台",
    description: "企业级区块链技术平台，支持联盟链部署、智能合约开发与运维监控",
    category: "区块链",
    icon: "⛓️",
    tags: ["联盟链", "智能合约", "运维监控", "跨链互通"],
    features: [
      "联盟链：快速部署与节点管理",
      "智能合约：可视化开发与安全审计",
      "运维监控：链上交易实时监控",
      "跨链互通：多链跨链解决方案",
    ],
    files: [
      { id: "tf6", name: "区块链平台解决方案.pdf", type: "pdf", size: "2.9MB", url: "#", uploadTime: "2024-03-15" },
      { id: "tf7", name: "智能合约开发指南.docx", type: "doc", size: "1.5MB", url: "#", uploadTime: "2024-03-10" },
    ],
  },
  {
    id: "t4",
    name: "物联网平台",
    description: "海量物联网设备连接与管理平台，支持设备接入、数据采集与远程控制",
    category: "IoT平台",
    icon: "📡",
    tags: ["设备接入", "数据采集", "边缘计算", "规则引擎"],
    features: [
      "设备接入：多协议设备快速接入",
      "数据采集：实时数据采集与存储",
      "边缘计算：云边协同计算",
      "规则引擎：灵活的业务规则配置",
    ],
    files: [
      { id: "tf8", name: "物联网平台产品手册.pdf", type: "pdf", size: "3.2MB", url: "#", uploadTime: "2024-03-18" },
      { id: "tf9", name: "设备接入协议说明.docx", type: "doc", size: "1.2MB", url: "#", uploadTime: "2024-03-15" },
    ],
  },
  {
    id: "t5",
    name: "低代码开发平台",
    description: "可视化低代码开发平台，支持表单、流程、页面等快速构建",
    category: "开发工具",
    icon: "🧩",
    tags: ["可视化开发", "表单构建", "流程编排", "组件市场"],
    features: [
      "可视化开发：拖拽式页面构建",
      "表单构建：灵活的数据表单设计",
      "流程编排：业务流程可视化编排",
      "组件市场：丰富的组件生态",
    ],
    files: [
      { id: "tf10", name: "低代码平台使用指南.pdf", type: "pdf", size: "4.1MB", url: "#", uploadTime: "2024-03-20" },
      { id: "tf11", name: "组件开发规范.docx", type: "doc", size: "0.8MB", url: "#", uploadTime: "2024-03-18" },
    ],
  },
  {
    id: "t6",
    name: "安全合规平台",
    description: "全方位安全合规管理平台，提供身份认证、权限管理与安全审计",
    category: "安全平台",
    icon: "🔒",
    tags: ["身份认证", "权限管理", "安全审计", "数据加密"],
    features: [
      "身份认证：多因素认证与单点登录",
      "权限管理：细粒度权限控制",
      "安全审计：全方位操作审计",
      "数据加密：敏感数据加密保护",
    ],
    files: [
      { id: "tf12", name: "安全合规平台介绍.pdf", type: "pdf", size: "2.3MB", url: "#", uploadTime: "2024-03-22" },
      { id: "tf13", name: "安全架构设计文档.docx", type: "doc", size: "1.6MB", url: "#", uploadTime: "2024-03-20" },
    ],
  },
];

export const techCategories = [
  { id: "all", name: "全部技术", icon: "⚙️" },
  { id: "AI平台", name: "AI平台", icon: "🤖" },
  { id: "数据平台", name: "数据平台", icon: "🗄️" },
  { id: "区块链", name: "区块链", icon: "⛓️" },
  { id: "IoT平台", name: "IoT平台", icon: "📡" },
  { id: "开发工具", name: "开发工具", icon: "🧩" },
  { id: "安全平台", name: "安全平台", icon: "🔒" },
];
