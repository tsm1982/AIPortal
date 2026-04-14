<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import AIChat from "@/components/AIChat.vue";

const route = useRoute();
const assetId = computed(() => route.params.id as string);

interface Asset {
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

interface AssetFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

const assets: Asset[] = [
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

const currentAsset = computed(() => {
  return assets.find((asset) => asset.id === assetId.value) || null;
});

const handleStart = () => {
  if (currentAsset.value?.url) {
    window.open(currentAsset.value.url, "_blank");
  } else {
    alert(`正在打开 ${currentAsset.value?.name}...`);
  }
};

const getFileIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    pdf: "📄",
    doc: "📝",
    docx: "📝",
    xls: "📊",
    xlsx: "📊",
    ppt: "📽️",
    pptx: "📽️",
    image: "🖼️",
    video: "🎬",
    CAD: "📐",
    diagram: "🔲",
    zip: "📦",
    rar: "📦",
  };
  return iconMap[type] || "📁";
};

const viewFile = (file: AssetFile) => {
  if (file.type === "pdf" || file.type === "image" || file.type === "video") {
    window.open(file.url, "_blank");
  } else {
    alert(`预览功能暂不支持此文件类型：${file.type}`);
  }
};

const downloadFile = (file: AssetFile) => {
  const link = document.createElement("a");
  link.href = file.url;
  link.download = file.name;
  link.click();
};
</script>

<template>
  <div class="asset-detail-view">
    <div class="container">
      <div class="back-section">
        <RouterLink to="/project-assets" class="back-link">
          <span class="back-icon">←</span>
          返回项目列表
        </RouterLink>
      </div>

      <div v-if="!currentAsset" class="not-found">
        <div class="not-found-icon">🔍</div>
        <h2 class="not-found-title">项目不存在</h2>
        <p class="not-found-desc">抱歉，您访问的项目不存在或已被删除</p>
        <RouterLink to="/project-assets" class="btn btn-primary"> 返回项目列表 </RouterLink>
      </div>

      <div v-else class="asset-detail">
        <div class="asset-header">
          <div class="asset-icon-large">{{ currentAsset.icon }}</div>
          <div class="asset-info">
            <h1 class="asset-title">{{ currentAsset.name }}</h1>
            <span class="asset-category">{{ currentAsset.category }}</span>
          </div>
          <div class="asset-actions">
            <button class="btn btn-primary" @click="handleStart">查看详情</button>
          </div>
        </div>

        <div class="asset-description-section">
          <h2 class="section-title">项目简介</h2>
          <p class="asset-description">{{ currentAsset.description }}</p>
        </div>

        <div class="asset-tags-section">
          <h2 class="section-title">项目标签</h2>
          <div class="tags-list">
            <span v-for="tag in currentAsset.tags" :key="tag" class="asset-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="asset-features-section">
          <h2 class="section-title">功能特点</h2>
          <div class="features-list">
            <div
              v-for="(feature, index) in currentAsset.features"
              :key="index"
              class="feature-item"
            >
              <div class="feature-number">{{ index + 1 }}</div>
              <div class="feature-content">{{ feature }}</div>
            </div>
          </div>
        </div>

        <div v-if="currentAsset.files?.length" class="asset-files-section">
          <h2 class="section-title">相关文档</h2>
          <div class="files-list">
            <div v-for="file in currentAsset.files" :key="file.id" class="file-item">
              <div class="file-icon">{{ getFileIcon(file.type) }}</div>
              <div class="file-info">
                <div class="file-name">{{ file.name }}</div>
                <div class="file-meta">
                  <span class="file-size">{{ file.size }}</span>
                  <span class="file-date">{{ file.uploadTime }}</span>
                </div>
              </div>
              <div class="file-actions">
                <button class="file-btn view-btn" @click="viewFile(file)">查看</button>
                <button class="file-btn download-btn" @click="downloadFile(file)">下载</button>
              </div>
            </div>
          </div>
        </div>

        <AIChat
          :title="`AI 问答 - ${currentAsset.name}`"
          :context-info="currentAsset.name"
          placeholder="输入您想了解的项目问题..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset-detail-view {
  padding: 32px 0;
  min-height: calc(100vh - var(--header-height) - 200px);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-section {
  margin-bottom: 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  padding: 6px 12px;
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast);
}

.back-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-bg);
}

.back-icon {
  font-size: 14px;
}

.not-found {
  text-align: center;
  padding: 60px 0;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
}

.not-found-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.not-found-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.not-found-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.asset-detail {
  max-width: 900px;
  margin: 0 auto;
}

.asset-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.asset-icon-large {
  width: 64px;
  height: 64px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
}

.asset-info {
  flex: 1;
}

.asset-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.asset-category {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.asset-actions {
  display: flex;
  align-items: center;
}

.asset-description-section,
.asset-tags-section,
.asset-features-section {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border-secondary);
}

.asset-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.asset-tag {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
}

.feature-number {
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: 600;
  flex-shrink: 0;
}

.feature-content {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.btn {
  padding: 8px 20px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.asset-files-section {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.files-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast);
}

.file-item:hover {
  background: var(--color-bg-spotlight);
}

.file-icon {
  width: 40px;
  height: 40px;
  background: var(--color-bg-base);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.file-info {
  flex: 1;
  min-width: 0;
}

.file-name {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-meta {
  display: flex;
  gap: 12px;
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.file-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.file-btn {
  padding: 6px 12px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-xs);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  border: 1px solid transparent;
}

.view-btn {
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.view-btn:hover {
  background: var(--color-primary);
  color: #fff;
}

.download-btn {
  background: var(--color-bg-base);
  color: var(--color-text-secondary);
  border-color: var(--color-border-base);
}

.download-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .asset-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .asset-actions {
    width: 100%;
    justify-content: center;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>
