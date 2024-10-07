export interface GuidedPromptPayloadI {
  prompt: string;
  brandName: string;
  logo?: FileList;
  welcomeMessage: string;
  hasRegisterButton: boolean;
  hasLoginButton: boolean;
  alternativeMessage: string;
  guidedPromptActive: boolean;
  guidedPrompts: GuidedPromptI[];
}

export interface GuidedPromptI {
  type: "category" | "qna" | "dynamic";
  content: GuideCategoryI | QnaPromptI | {};
}

export interface GuideCategoryI {
  categories: string[];
}

export interface QnaPromptI {
  question: string;
}

