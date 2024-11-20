export const api = async (username: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub events: ${response.status}`);
    }
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch GitHub events");
  }
};

api("usern")