import Symptoms from "../models/Symptoms";

export const SYMPTOMS = [
  new Symptoms("s1", "Fever > 100.1"),
  new Symptoms("s2", "Chills"),
  new Symptoms("s3", "Difficulty Breathing"),
  new Symptoms("s4", "Cough"),
  new Symptoms("s5", "Loss of Taste or Smell"),
  new Symptoms("s6", "Sore Throat"),
  new Symptoms("s7", "Vomiting"),
  new Symptoms("s8", "Diarrhea"),
  new Symptoms("s9", "Headache"),
];

export const CATEGORIES = [
  new Symptoms("c1", "HealthCare Worker/First Provider"),
  new Symptoms("c2", "Age >= 55"),
  new Symptoms("c3", "Age between 16 to 64 with high-risk medical conditions"),
  new Symptoms("c4", "Have an intellectual or developmental disorder"),
  new Symptoms("c5", "Other nonessential critical workers"),
];
