import "@testing-library/jest-dom";

// Mock del Next.js router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

// Mock de Next.js image
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => "mock-image",
}));
