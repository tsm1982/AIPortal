<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import AIChat from "@/components/AIChat.vue";

const route = useRoute();
const solutionId = computed(() => route.params.id as string);

interface Solution {
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

interface SolutionFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

const solutions: Solution[] = [
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
      {
        id: "sf1",
        name: "智慧城市整体规划方案.pdf",
        type: "pdf",
        size: "5.2MB",
        url: "#",
        uploadTime: "2024-03-15",
      },
      {
        id: "sf2",
        name: "城市运营中心演示.mp4",
        type: "video",
        size: "65MB",
        url: "#",
        uploadTime: "2024-03-10",
      },
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
      {
        id: "sf3",
        name: "智慧金融解决方案.pdf",
        type: "pdf",
        size: "4.5MB",
        url: "#",
        uploadTime: "2024-03-18",
      },
      {
        id: "sf4",
        name: "金融行业案例集.docx",
        type: "doc",
        size: "2.8MB",
        url: "#",
        uploadTime: "2024-03-15",
      },
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
      {
        id: "sf5",
        name: "智慧政务解决方案.pdf",
        type: "pdf",
        size: "3.8MB",
        url: "#",
        uploadTime: "2024-03-20",
      },
      {
        id: "sf6",
        name: "政务平台操作指南.docx",
        type: "doc",
        size: "2.2MB",
        url: "#",
        uploadTime: "2024-03-18",
      },
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
      {
        id: "sf7",
        name: "智慧医疗解决方案.pdf",
        type: "pdf",
        size: "4.2MB",
        url: "#",
        uploadTime: "2024-03-22",
      },
      {
        id: "sf8",
        name: "医疗系统集成方案.docx",
        type: "doc",
        size: "3.1MB",
        url: "#",
        uploadTime: "2024-03-20",
      },
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
      {
        id: "sf9",
        name: "智慧教育解决方案.pdf",
        type: "pdf",
        size: "3.5MB",
        url: "#",
        uploadTime: "2024-03-25",
      },
      {
        id: "sf10",
        name: "智慧校园建设指南.docx",
        type: "doc",
        size: "2.4MB",
        url: "#",
        uploadTime: "2024-03-22",
      },
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
      {
        id: "sf11",
        name: "智慧能源解决方案.pdf",
        type: "pdf",
        size: "4.8MB",
        url: "#",
        uploadTime: "2024-03-28",
      },
      {
        id: "sf12",
        name: "能源管理系统介绍.docx",
        type: "doc",
        size: "2.6MB",
        url: "#",
        uploadTime: "2024-03-25",
      },
    ],
  },
];

const currentSolution = computed(() => {
  return solutions.find((solution) => solution.id === solutionId.value) || null;
});

const handleStart = () => {
  if (currentSolution.value?.url) {
    window.open(currentSolution.value.url, "_blank");
  } else {
    alert(`正在打开 ${currentSolution.value?.name}...`);
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

const viewFile = (file: SolutionFile) => {
  if (file.type === "pdf" || file.type === "image" || file.type === "video") {
    window.open(file.url, "_blank");
  } else {
    alert(`预览功能暂不支持此文件类型：${file.type}`);
  }
};

const downloadFile = (file: SolutionFile) => {
  const link = document.createElement("a");
  link.href = file.url;
  link.download = file.name;
  link.click();
};
</script>

<template>
  <div class="solution-detail-view">
    <div class="container">
      <div class="back-section">
        <RouterLink to="/solutions" class="back-link">
          <span class="back-icon">←</span>
          返回方案列表
        </RouterLink>
      </div>

      <div v-if="!currentSolution" class="not-found">
        <div class="not-found-icon">🔍</div>
        <h2 class="not-found-title">方案不存在</h2>
        <p class="not-found-desc">抱歉，您访问的方案不存在或已被删除</p>
        <RouterLink to="/solutions" class="btn btn-primary"> 返回方案列表 </RouterLink>
      </div>

      <div v-else class="solution-detail">
        <div class="solution-header">
          <div class="solution-icon-large">{{ currentSolution.icon }}</div>
          <div class="solution-info">
            <h1 class="solution-title">{{ currentSolution.name }}</h1>
            <span class="solution-category">{{ currentSolution.category }}</span>
          </div>
          <div class="solution-actions">
            <button class="btn btn-primary" @click="handleStart">查看详情</button>
          </div>
        </div>

        <div class="solution-description-section">
          <h2 class="section-title">方案简介</h2>
          <p class="solution-description">{{ currentSolution.description }}</p>
        </div>

        <div class="solution-tags-section">
          <h2 class="section-title">方案标签</h2>
          <div class="tags-list">
            <span v-for="tag in currentSolution.tags" :key="tag" class="solution-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="solution-features-section">
          <h2 class="section-title">核心能力</h2>
          <div class="features-list">
            <div
              v-for="(feature, index) in currentSolution.features"
              :key="index"
              class="feature-item"
            >
              <div class="feature-number">{{ index + 1 }}</div>
              <div class="feature-content">{{ feature }}</div>
            </div>
          </div>
        </div>

        <div v-if="currentSolution.files?.length" class="asset-files-section">
          <h2 class="section-title">相关文档</h2>
          <div class="files-list">
            <div v-for="file in currentSolution.files" :key="file.id" class="file-item">
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
          :title="`AI 问答 - ${currentSolution.name}`"
          :context-info="currentSolution.name"
          placeholder="输入您想了解的方案问题..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.solution-detail-view {
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

.solution-detail {
  max-width: 900px;
  margin: 0 auto;
}

.solution-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.solution-icon-large {
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

.solution-info {
  flex: 1;
}

.solution-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.solution-category {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.solution-actions {
  display: flex;
  align-items: center;
}

.solution-description-section,
.solution-tags-section,
.solution-features-section {
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

.solution-description {
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

.solution-tag {
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
  .solution-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .solution-actions {
    width: 100%;
    justify-content: center;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>
