"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { BoltIcon, PlayCircleIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Car } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getPlayerQuery, setPlayerQuery } from "@/queries/playerQueries";
export default function Home() {
  const router = useRouter();
  const [toggled, setToggled] = useState(false);
  const [player, setPlayerData] = useState({coderTag: '', playerCode: ''});

  const handleInput = (e: any) =>{
    setPlayerData({
      ...player,
      [e.target.name]: e.target.value
    })
    console.log(player);
  }
  const handleSubmit = () => {
    setPlayerQuery.mutate(player);
    router.push('/game');
  }
  const toggleInputCard = () =>{
    console.log('active');
    setToggled(!toggled);
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-4 my-auto h-full">
        <CardTitle className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-center">NodeWars</CardTitle>
        <p className="text-2xl">Where coders clash and snippets decide victory!</p>
        <Button className="mx-auto" onClick={toggleInputCard}><PlayCircleIcon className="w-10 h-10 "/> Let's Play</Button>

        {/*Player Card*/}
        {toggled &&
          <motion.div
          initial={{ y:100, opacity: 0 }}
          animate={{ y:0, opacity:100,transition:{duration: 0.5, ease: "easeInOut"}}}
        >
            <Card className="flex flex-col gap-4 justify-center items-center border-0 shadow bg-gradient-to-br from-stone-100 to-gray-200">
              <CardTitle className="text-lg">Lets get your name</CardTitle>
              <form className="flex flex-col gap-4 w-full p-8">
                <div className="flex gap-4">
                    <Label htmlFor="name">
                      <UserCircleIcon className="w-8 h-8" />
                    </Label>
                    <Input placeholder="Enter your name" onChange={handleInput} value={player.coderTag}/>
                </div>
                <div className="flex gap-4">
                  <Label htmlFor="tagline">
                    <BoltIcon className="w-8 h-8" />
                  </Label>
                  <Input placeholder="Enter your tagline" onChange={handleInput} value={player.playerCode}/>
                </div>
                
              </form>
              <div className="flex gap-4">
                <Button className="w-32" onClick={() => router.push('/Pages/lobby')}>Create Lobby</Button>
                <Button className="w-32">Join Lobby</Button>

              </div>
            </Card>
          </motion.div>
        }
        
      </div>
    </div>
  );
}
