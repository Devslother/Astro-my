export type Field = {
  id: string; // Уникальный идентификатор поля
  label: string; // Текст метки поля
  placeholder: string; // Подсказка в поле
  type: string; // Тип поля (text, email, etc.)
};

export const LAST_FIELDS: Field[] = [
  {
    id: "usingServiceMesh",
    label: "Are you currently using Istio or any other Service Mesh?",
    placeholder: "Enter your answer",
    type: "text",
  },
  {
    id: "additionalInfo",
    label: "Anything else you'd like to tell us?",
    placeholder: "Enter your answer",
    type: "text",
  },
];

export const BUSINESS_OBJECTIVES: string[] = [
  "Implement Zero Trust security",
  "Observability into services",
  "Migrate workloads to one or more clouds",
  "Deploy faster & safer with canary releases",
  "Ensure infrastructure resilience",
  "Learning Istio",
  "Accelerate application delivery",
];
