# classdosan-oneday-starter

비개발자가 Claude Code와 함께 3시간 안에 업무용 웹 도구의 핵심 시나리오 하나를 만드는 원데이 클래스용 진행 하네스입니다.

온라인 교재: https://classdosan-oneday-vibe.vercel.app/class/

`환경 확인 → 아이디어·구현 가능성 → PRD → Phase 1 구현·테스트 → 보안 점검·최종 배포 → 공유·마무리` 순서로 진행합니다.

## 수업 전에 준비하기

1. 회사 안내에 따라 Claude 요금제와 Claude Code Desktop 로그인을 준비합니다.
2. Node.js, Git, Vercel CLI와 승인된 Vercel 계정·토큰을 준비합니다.
3. 빈 폴더를 만든 뒤 Claude Code에서 엽니다.
4. Claude에게 아래처럼 요청합니다.

> 이 폴더에 수업용 스타터를 받아줘. 기존 파일은 삭제하거나 덮어쓰지 마. 폴더가 비어 있으면 아래 저장소를 현재 폴더에 그대로 clone해줘.
>
> https://github.com/sbchung-ops/classdosan-oneday-starter.git

```bash
git clone https://github.com/sbchung-ops/classdosan-oneday-starter.git .
```

현재 폴더에 파일이 있다면 자동으로 지우지 말고 새 빈 폴더에서 다시 시작합니다.

## 수업에서 시작하기

프로젝트를 Claude Code Desktop으로 연 뒤 다음 문장으로 시작합니다.

> PROGRESS.md를 읽고 현재 단계부터 수업을 시작해줘.

설치와 계정 준비는 수업 전에 완료합니다. 수업에서는 실제 준비 상태만 확인합니다.

## 수업 범위

- 자유 주제로 만들되 3시간 안에 끝낼 수 있는 Phase 1만 구현합니다.
- 소개 페이지나 별도 랜딩 페이지는 만들지 않습니다.
- 서비스는 루트 경로 `/`에 바로 만듭니다.
- DB, 로그인, 실제 외부 API, 크롤링, 외부 AI 호출은 기본적으로 제외합니다.
- 외부 데이터가 필요하면 `data/` 안의 TXT·JSON·CSV 더미 데이터로 구조만 재현합니다.
- 회사 자료, 고객 정보, 개인정보, API 키와 토큰은 저장소에 넣지 않습니다.

## 진행 파일

- `CLAUDE.md`: Claude가 따라야 할 전체 수업 규칙
- `PROGRESS.md`: 현재 단계와 핵심 결과 기록
- `steps/`: 단계별 진행 지시

수업 종료 후 참가자가 동의하면 진행 파일만 정리하고, 서비스 코드와 `draft.md`, `service-prd.md`는 남깁니다.
