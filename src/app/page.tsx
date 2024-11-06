"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  email: string;
  age: string;
  gender: string;
  timeOfDay: string;
  location: string;
  mood: string;
  weather: string;
  activity: string;
  moodIntensity: number;
  sleepQuality: number;
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    age: "",
    gender: "",
    timeOfDay: "",
    location: "",
    mood: "",
    weather: "",
    activity: "",
    moodIntensity: 5,
    sleepQuality: 5,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (name: keyof FormData) => (value: number[]) => {
    setFormData((prev) => ({ ...prev, [name]: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-xl bg-white">
          <CardHeader className="relative overflow-hidden bg-blue-600 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
            <CardTitle className="relative text-3xl font-bold z-10">
              User Survey
            </CardTitle>
            <CardDescription className="relative text-blue-100 z-10">
              Please answer the following questions about your current state.
            </CardDescription>
            <ChevronRight className="absolute top-4 right-4 text-white animate-pulse" />
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "email", label: "Email", type: "email" },
                { name: "age", label: "Enter your age", type: "number" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Label
                    htmlFor={field.name}
                    className="text-lg font-semibold text-gray-700"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    onChange={handleInputChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </motion.div>
              ))}

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label className="text-lg font-semibold text-gray-700">
                  Select your gender
                </Label>
                <Select
                  name="gender"
                  onValueChange={handleSelectChange("gender")}
                >
                  <SelectTrigger className="w-full border-gray-300">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "male",
                      "female",
                      "non-binary",
                      "other",
                      "prefer-not-to-say",
                    ].map((gender) => (
                      <SelectItem
                        key={gender}
                        value={gender}
                        className="capitalize"
                      >
                        {gender.replace("-", " ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              {[
                {
                  name: "timeOfDay",
                  label: "Indicate the current time of day",
                  options: ["morning", "afternoon", "evening", "night"],
                },
                {
                  name: "location",
                  label: "Enter your current location",
                  options: ["home", "public-space", "work", "outside"],
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Label className="text-lg font-semibold text-gray-700">
                    {field.label}
                  </Label>
                  <RadioGroup
                    name={field.name}
                    onValueChange={handleSelectChange(
                      field.name as keyof FormData
                    )}
                    className="flex flex-wrap gap-4"
                  >
                    {field.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={option}
                          id={`${field.name}-${option}`}
                        />
                        <Label
                          htmlFor={`${field.name}-${option}`}
                          className="capitalize text-gray-600"
                        >
                          {option.replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>
              ))}

              {[
                {
                  name: "mood",
                  label: "What is your current mood",
                  options: [
                    "relaxed",
                    "sad",
                    "happy",
                    "anxious",
                    "stressed",
                    "anger",
                  ],
                },
                {
                  name: "weather",
                  label: "Describe the current weather in your area",
                  options: ["snowy", "cloudy", "rainy", "sunny"],
                },
                {
                  name: "activity",
                  label: "Specify the activity you are engaged in currently",
                  options: ["relaxing", "socializing", "working", "exercising"],
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Label className="text-lg font-semibold text-gray-700">
                    {field.label}
                  </Label>
                  <Select
                    name={field.name}
                    onValueChange={handleSelectChange(
                      field.name as keyof FormData
                    )}
                  >
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue placeholder={`Select ${field.name}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="capitalize"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              ))}

              {[
                {
                  name: "moodIntensity",
                  label:
                    "On a scale of 1 to 10, rate how intense your current mood is",
                  min: "Very low",
                  max: "Extremely high",
                },
                {
                  name: "sleepQuality",
                  label: "Rate the quality of your sleep from 1 to 10",
                  min: "Very poor",
                  max: "Excellent",
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Label className="text-lg font-semibold text-gray-700">
                    {field.label}
                  </Label>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={[5]}
                    onValueChange={handleSliderChange(
                      field.name as keyof FormData
                    )}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{field.min}</span>
                    <span>{field.max}</span>
                  </div>
                </motion.div>
              ))}
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all duration-200"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" />
                    Submitted
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
