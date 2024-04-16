"use client";
import { Video } from "@/lib/db.types";
import { supabaseBrowser } from "@/lib/supabase/browser";
import React, { useEffect , useState} from "react";

export default function Videos() {
	const [videos, setVideos] = useState<Video[]>([]);
	const supabase = supabaseBrowser();

	async function getVideos() {
		const { data: dbVideos } = await supabase.from("videos").select("*");

		for (const dbVideo of dbVideos) {
			const { data, error } = await supabase.storage.from('videos').createSignedUrl(dbVideo.filename, 60)
			console.log(data)
			dbVideo.url = data?.signedUrl
		}
		
		setVideos(dbVideos ?? []);	
	}

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<>
		<h1>Pick a video to create marketing content</h1>
		<ul>
			{videos.map((video) => {

				return <li key={video.id}>{video.url}</li>
			})
			}
		</ul>
		</>
	);
}
