import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이 프로젝트는 수업용 AGENTS.md를 직접 관리하므로 Next.js가 내용을 덧붙이지 않게 한다.
  agentRules: false,
};

export default nextConfig;
