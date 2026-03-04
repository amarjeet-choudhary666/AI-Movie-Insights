import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function testFullFlow() {
  console.log("🧪 Testing Full Movie Insight Flow...\n");

  const testImdbId = "tt0133093"; // The Matrix
  const apiUrl = `http://localhost:${process.env.PORT || 4000}/api/movies/insight`;

  try {
    console.log(`📡 Fetching movie insights for ${testImdbId}...`);
    console.log(`API URL: ${apiUrl}\n`);

    const response = await axios.post(apiUrl, {
      imdbId: testImdbId
    });

    if (response.data.success) {
      const movie = response.data.data;
      
      console.log("✅ SUCCESS! Movie data received:\n");
      console.log("━".repeat(60));
      console.log(`🎬 Title: ${movie.title}`);
      console.log(`📅 Year: ${movie.year}`);
      console.log(`⭐ Rating: ${movie.rating}/10`);
      console.log(`🎭 Cast: ${movie.cast}`);
      console.log(`📝 Plot: ${movie.plot.substring(0, 100)}...`);
      console.log("━".repeat(60));
      
      if (movie.reviews && movie.reviews.length > 0) {
        console.log(`\n💬 Reviews: ${movie.reviews.length} found`);
      } else {
        console.log("\n💬 Reviews: None available");
      }
      
      if (movie.aiInsight) {
        console.log("\n🤖 AI ANALYSIS:");
        console.log("━".repeat(60));
        console.log(`Sentiment: ${movie.aiInsight.sentiment}`);
        console.log(`Summary: ${movie.aiInsight.summary}`);
        console.log("━".repeat(60));
      } else {
        console.log("\n❌ No AI insights found!");
      }
      
      console.log("\n✅ All functionality working correctly!");
      
    } else {
      console.log("❌ API returned error:", response.data.message);
    }

  } catch (error: any) {
    console.log("\n❌ Error occurred:");
    
    if (error.code === "ECONNREFUSED") {
      console.log("⚠️  Backend server is not running!");
      console.log("💡 Start it with: cd backend && npm run dev");
    } else if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Message:", error.response.data.message || error.response.data);
    } else {
      console.log("Error:", error.message);
    }
  }
}

testFullFlow();
