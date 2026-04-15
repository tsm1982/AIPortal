export interface SolutionFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  features: string[];
  url?: string;
  files?: SolutionFile[];
}

export const solutions: Solution[] = [
  {
    id: "s1",
    name: "智慧城市解决方案",
    description: "基于AI和大数据技术的智慧城市建设方案，涵盖城市管理、民生服务、产业发展等领域",
    category: "智慧城市",
    icon: "🌆",
    tags: ["城市管理", "民生服务", "产业发展", "数据融合"],
    features: [
      "城市管理：智能化城市运营中心",
      "民生服务：一站式便民服务平台",
      "产业发展：产业经济分析系统",
      "数据融合：跨部门数据共享交换",
    ],
    files: [
      { id: "sf1", name: "智慧城市整体规划方案.pdf", type: "pdf", size: "5.2MB", url: "#", uploadTime: "2024-03-15" },
      { id: "sf2", name: "城市运营中心演示.mp4", type: "video", size: "65MB", url: "#", uploadTime: "2024-03-10" },
    ],
  },
  {
    id: "s2",
    name: "智慧金融解决方案",
    description: "面向金融行业的数字化转型方案，提供智能风控、精准营销、客户服务等能力",
    category: "智慧金融",
    icon: "🏦",
    tags: ["智能风控", "精准营销", "客户服务", "监管合规"],
    features: [
      "智能风控：实时风险识别与预警",
      "精准营销：客户画像与智能推荐",
      "客户服务：智能客服与远程服务",
      "监管合规：合规性自动化检查",
    ],
    files: [
      { id: "sf3", name: "智慧金融解决方案.pdf", type: "pdf", size: "4.5MB", url: "#", uploadTime: "2024-03-18" },
      { id: "sf4", name: "金融行业案例集.docx", type: "doc", size: "2.8MB", url: "#", uploadTime: "2024-03-15" },
    ],
  },
  {
    id: "s3",
    name: "智慧政务解决方案",
    description: "助力政府数字化转型的综合方案，实现政务服务智能化、协同化和便捷化",
    category: "智慧政务",
    icon: "🏛️",
    tags: ["政务服务", "协同办公", "智慧监管", "决策支持"],
    features: [
      "政务服务：一体化在线办事平台",
      "协同办公：跨部门协同工作系统",
      "智慧监管：智能化监管预警",
      "决策支持：数据驱动的决策分析",
    ],
    files: [
      { id: "sf5", name: "智慧政务解决方案.pdf", type: "pdf", size: "3.8MB", url: "#", uploadTime: "2024-03-20" },
      { id: "sf6", name: "政务平台操作指南.docx", type: "doc", size: "2.2MB", url: "#", uploadTime: "2024-03-18" },
    ],
  },
  {
    id: "s4",
    name: "智慧医疗解决方案",
    description: "覆盖医疗全流程的智能化方案，提升医疗服务质量效率和健康管理水平",
    category: "智慧医疗",
    icon: "🏥",
    tags: ["智慧诊疗", "健康管理", "医院管理", "医疗协同"],
    features: [
      "智慧诊疗：辅助诊断与治疗推荐",
      "健康管理：全生命周期健康档案",
      "医院管理：智慧医院运营系统",
      "医疗协同：医联体协同服务平台",
    ],
    files: [
      { id: "sf7", name: "智慧医疗解决方案.pdf", type: "pdf", size: "4.2MB", url: "#", uploadTime: "2024-03-22" },
      { id: "sf8", name: "医疗系统集成方案.docx", type: "doc", size: "3.1MB", url: "#", uploadTime: "2024-03-20" },
    ],
  },
  {
    id: "s5",
    name: "智慧教育解决方案",
    description: "教育信息化2.0时代的创新方案，促进教育公平与质量提升",
    category: "智慧教育",
    icon: "🎓",
    tags: ["智慧教学", "智慧学习", "智慧管理", "智慧评价"],
    features: [
      "智慧教学：智能化教学辅助工具",
      "智慧学习：个性化学习推荐系统",
      "智慧管理：教育大数据分析平台",
      "智慧评价：多维度教学质量评估",
    ],
    files: [
      { id: "sf9", name: "智慧教育解决方案.pdf", type: "pdf", size: "3.5MB", url: "#", uploadTime: "2024-03-25" },
      { id: "sf10", name: "智慧校园建设指南.docx", type: "doc", size: "2.4MB", url: "#", uploadTime: "2024-03-22" },
    ],
  },
  {
    id: "s6",
    name: "智慧能源解决方案",
    description: "能源行业数字化转型方案，助力企业实现智能化生产和绿色低碳发展",
    category: "智慧能源",
    icon: "⚡",
    tags: ["智能生产", "能耗管理", "设备运维", "碳排放管理"],
    features: [
      "智能生产：智能化生产调度系统",
      "能耗管理：能耗监测与优化控制",
      "设备运维：预测性设备维护",
      "碳排放管理：碳足迹追踪与核算",
    ],
    files: [
      { id: "sf11", name: "智慧能源解决方案.pdf", type: "pdf", size: "4.8MB", url: "#", uploadTime: "2024-03-28" },
      { id: "sf12", name: "能源管理系统介绍.docx", type: "doc", size: "2.6MB", url: "#", uploadTime: "2024-03-25" },
    ],
  },
];

export const solutionCategories = [
  { id: "all", name: "全部方案", icon: "💡" },
  { id: "智慧城市", name: "智慧城市", icon: "🌆" },
  { id: "智慧金融", name: "智慧金融", icon: "🏦" },
  { id: "智慧政务", name: "智慧政务", icon: "🏛️" },
  { id: "智慧医疗", name: "智慧医疗", icon: "🏥" },
  { id: "智慧教育", name: "智慧教育", icon: "🎓" },
  { id: "智慧能源", name: "智慧能源", icon: "⚡" },
];
