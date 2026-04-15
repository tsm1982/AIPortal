export interface AssetFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

export interface ProjectAsset {
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

export const projectAssets: ProjectAsset[] = [
  {
    id: "p1",
    name: "智慧社区项目",
    description: "基于AI技术打造的智慧社区管理平台，整合物业管理、安防监控、便民服务等功能",
    category: "智慧社区",
    icon: "🏘️",
    tags: ["智慧社区", "物业管理", "安防监控", "便民服务"],
    features: [
      "智能门禁：人脸识别与二维码扫描",
      "安防监控：24小时实时监控与异常报警",
      "报修管理：在线报修与进度跟踪",
      "便民服务：快递代收、洗衣预约等",
    ],
    files: [
      {
        id: "f1",
        name: "智慧社区解决方案V2.0.pdf",
        type: "pdf",
        size: "3.2MB",
        url: "#",
        uploadTime: "2024-03-15",
      },
      {
        id: "f2",
        name: "项目技术架构图.png",
        type: "image",
        size: "1.5MB",
        url: "#",
        uploadTime: "2024-03-10",
      },
      {
        id: "f3",
        name: "需求规格说明书.docx",
        type: "doc",
        size: "2.8MB",
        url: "#",
        uploadTime: "2024-02-20",
      },
      {
        id: "f4",
        name: "演示视频.mp4",
        type: "video",
        size: "45MB",
        url: "#",
        uploadTime: "2024-03-01",
      },
    ],
  },
  {
    id: "p2",
    name: "智慧园区项目",
    description: "面向各类园区的智能化管理方案，提供设施管理、能源管理、企业服务等",
    category: "智慧园区",
    icon: "🏢",
    tags: ["智慧园区", "设施管理", "能源管理", "企业服务"],
    features: [
      "设施管理：设备监控与智能运维",
      "能源管理：能耗监测与节能优化",
      "企业服务：招商管理与企业协同",
      "应急指挥：突发事件应急响应",
    ],
    files: [
      {
        id: "f5",
        name: "智慧园区建设方案.pdf",
        type: "pdf",
        size: "4.1MB",
        url: "#",
        uploadTime: "2024-03-12",
      },
      {
        id: "f6",
        name: "园区布局规划图.dwg",
        type: "CAD",
        size: "8.5MB",
        url: "#",
        uploadTime: "2024-03-08",
      },
    ],
  },
  {
    id: "p3",
    name: "智慧校园项目",
    description: "教育行业数字化转型方案，覆盖教学、管理、生活的全场景智能化",
    category: "智慧校园",
    icon: "🎓",
    tags: ["智慧校园", "智慧教学", "校园管理", "平安校园"],
    features: [
      "智慧教学：在线教学与资源共享",
      "校园管理：考勤管理与宿舍管理",
      "平安校园：校园安防与食品安全",
      "智慧生活：校园一卡通与快递服务",
    ],
    files: [
      {
        id: "f7",
        name: "智慧校园整体规划.pdf",
        type: "pdf",
        size: "5.2MB",
        url: "#",
        uploadTime: "2024-03-05",
      },
      {
        id: "f8",
        name: "校园网络拓扑图.vsd",
        type: "diagram",
        size: "2.1MB",
        url: "#",
        uploadTime: "2024-02-28",
      },
    ],
  },
  {
    id: "p4",
    name: "智慧医院项目",
    description: "医疗服务数字化转型方案，提供预约挂号、远程诊疗、健康管理等服务",
    category: "智慧医院",
    icon: "🏥",
    tags: ["智慧医院", "预约挂号", "远程诊疗", "健康管理"],
    features: [
      "预约挂号：在线预约与智能导诊",
      "远程诊疗：远程会诊与在线问诊",
      "健康管理：健康档案与随访管理",
      "智慧病房：床位管理与护理看板",
    ],
    files: [
      {
        id: "f9",
        name: "智慧医院建设方案.pdf",
        type: "pdf",
        size: "6.8MB",
        url: "#",
        uploadTime: "2024-03-18",
      },
      {
        id: "f10",
        name: "医院系统集成方案.docx",
        type: "doc",
        size: "3.4MB",
        url: "#",
        uploadTime: "2024-03-15",
      },
    ],
  },
  {
    id: "p5",
    name: "智慧交通项目",
    description: "城市交通智能化管理方案，覆盖信号控制、路况监测、停车管理等",
    category: "智慧交通",
    icon: "🚦",
    tags: ["智慧交通", "信号控制", "路况监测", "停车管理"],
    features: [
      "信号控制：自适应信号灯与绿波带",
      "路况监测：实时路况与拥堵预警",
      "停车管理：车位引导与自动计费",
      "公交调度：智能调度与信息服务",
    ],
    files: [
      {
        id: "f11",
        name: "智慧交通解决方案.pdf",
        type: "pdf",
        size: "4.5MB",
        url: "#",
        uploadTime: "2024-03-20",
      },
      {
        id: "f12",
        name: "交通仿真模型.mp4",
        type: "video",
        size: "120MB",
        url: "#",
        uploadTime: "2024-03-18",
      },
    ],
  },
  {
    id: "p6",
    name: "智慧文旅项目",
    description: "文旅行业数字化方案，提供景区管理、游客服务、文化推广等功能",
    category: "智慧文旅",
    icon: "🏛️",
    tags: ["智慧文旅", "景区管理", "游客服务", "文化推广"],
    features: [
      "景区管理：客流监测与应急指挥",
      "游客服务：在线预约与智能导游",
      "文化推广：数字展馆与文创商城",
      "数据分析：游客画像与营销分析",
    ],
    files: [
      {
        id: "f13",
        name: "智慧文旅平台介绍.pdf",
        type: "pdf",
        size: "3.8MB",
        url: "#",
        uploadTime: "2024-03-22",
      },
      {
        id: "f14",
        name: "景区智能导览系统演示.mp4",
        type: "video",
        size: "85MB",
        url: "#",
        uploadTime: "2024-03-20",
      },
    ],
  },
];

export const projectCategories = [
  { id: "all", name: "全部项目", icon: "📁" },
  { id: "智慧社区", name: "智慧社区", icon: "🏘️" },
  { id: "智慧园区", name: "智慧园区", icon: "🏢" },
  { id: "智慧水务", name: "智慧水务", icon: "💧" },
  { id: "智慧交通", name: "智慧交通", icon: "🚦" },
  { id: "智慧教育", name: "智慧教育", icon: "🎓" },
  { id: "智慧医疗", name: "智慧医疗", icon: "🏥" },
];
