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
import { CheckCircle, Sparkles } from "lucide-react";
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
    return null; // Prevent hydration errors by not rendering anything on the server
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl mx-auto shadow-2xl bg-white/90 backdrop-blur-md">
          <CardHeader className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90" />
            <CardTitle className="relative text-3xl font-bold text-white z-10">
              User Survey
            </CardTitle>
            <CardDescription className="relative text-blue-100 z-10">
              Please answer the following questions about your current state.
            </CardDescription>
            <Sparkles className="absolute top-4 right-4 text-yellow-300 animate-pulse" />
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="email" className="text-lg font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleInputChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="age" className="text-lg font-semibold">
                  Enter your age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  required
                  onChange={handleInputChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label className="text-lg font-semibold">
                  Select your gender
                </Label>
                <Select
                  name="gender"
                  onValueChange={handleSelectChange("gender")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label className="text-lg font-semibold">
                  Indicate the current time of day
                </Label>
                <RadioGroup
                  name="timeOfDay"
                  onValueChange={handleSelectChange("timeOfDay")}
                  className="flex flex-wrap gap-4"
                >
                  {["morning", "afternoon", "evening", "night"].map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <RadioGroupItem value={time} id={time} />
                      <Label htmlFor={time} className="capitalize">
                        {time}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label className="text-lg font-semibold">
                  Enter your current location
                </Label>
                <RadioGroup
                  name="location"
                  onValueChange={handleSelectChange("location")}
                  className="flex flex-wrap gap-4"
                >
                  {["home", "public-space", "work", "outside"].map(
                    (location) => (
                      <div
                        key={location}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem value={location} id={location} />
                        <Label htmlFor={location} className="capitalize">
                          {location.replace("-", " ")}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Label className="text-lg font-semibold">
                  What is your current mood
                </Label>
                <Select name="mood" onValueChange={handleSelectChange("mood")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select mood" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "relaxed",
                      "sad",
                      "happy",
                      "anxious",
                      "stressed",
                      "anger",
                    ].map((mood) => (
                      <SelectItem
                        key={mood}
                        value={mood}
                        className="capitalize"
                      >
                        {mood}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Label className="text-lg font-semibold">
                  Describe the current weather in your area
                </Label>
                <Select
                  name="weather"
                  onValueChange={handleSelectChange("weather")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select weather" />
                  </SelectTrigger>
                  <SelectContent>
                    {["snowy", "cloudy", "rainy", "sunny"].map((weather) => (
                      <SelectItem
                        key={weather}
                        value={weather}
                        className="capitalize"
                      >
                        {weather}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Label className="text-lg font-semibold">
                  Specify the activity you are engaged in currently
                </Label>
                <Select
                  name="activity"
                  onValueChange={handleSelectChange("activity")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select activity" />
                  </SelectTrigger>
                  <SelectContent>
                    {["relaxing", "socializing", "working", "exercising"].map(
                      (activity) => (
                        <SelectItem
                          key={activity}
                          value={activity}
                          className="capitalize"
                        >
                          {activity}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <Label className="text-lg font-semibold">
                  On a scale of 1 to 10, rate how intense your current mood is
                </Label>
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={handleSliderChange("moodIntensity")}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Very low</span>
                  <span>Extremely high</span>
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Label className="text-lg font-semibold">
                  Rate the quality of your sleep from 1 to 10
                </Label>
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={[5]}
                  onValueChange={handleSliderChange("sleepQuality")}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Very poor</span>
                  <span>Excellent</span>
                </div>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 rounded-b-lg">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-200"
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
