import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Clock, Users, Award, Coins } from 'lucide-react';
import { useState } from 'react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  level: string;
  reward: number;
  progress?: number;
}

export function CourseCard({
  id,
  title,
  description,
  image,
  duration,
  students,
  level,
  reward,
  progress,
}: CourseCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm">
        <div className={`relative w-full aspect-video ${imageError ? 'bg-muted' : ''}`}>
          {!imageError && (
          <Image
            src={image}
            alt={title}
            fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
              priority
              quality={95}
              loading="eager"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
              <div
                className="h-full bg-mint-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        <CardHeader className="flex-none pt-4">
          <CardTitle className="line-clamp-2 text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-2 text-sm text-muted-foreground mb-4">
            {description}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-mint-400" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-mint-400" />
              <span>{students} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-mint-400" />
              <span>{level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-coral-400" />
              <span>{reward} tokens</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-none justify-between pt-4">
          <Button variant="mint" size="sm">
            {progress !== undefined ? 'Continue Learning' : 'Start Learning'}
          </Button>
          <Button variant="glass" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 