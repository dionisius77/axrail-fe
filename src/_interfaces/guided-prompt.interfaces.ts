export interface GuidedPromptPayloadI {
  prompt: string;
  brandName: string;
  logo: File;
  welcomeMessage: string;
  hasRegisterButton: boolean;
  hasLoginButton: boolean;
  alternativeMessage: string;
  guidedPromptActive: boolean;
  guidedPrompts: GuidedPromptI[];
}

export interface GuidedPromptI {
  type: "category" | "qna" | "dynamic";
  content: GuideCategoryI | QnaPromptI | undefined;
}

export interface GuideCategoryI {
  categories: string[];
}

export interface QnaPromptI {
  question: string;
}

