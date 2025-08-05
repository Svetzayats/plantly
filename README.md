# Plantly 🌱

This is a simple plant care tracking app. You can add your plants, specify how often they need to be watered, and keep track of the last time you watered each one.

I built this app as part of the excellent course [Intermediate React Native, v2 by Kadi Kraman on Frontend Masters](https://frontendmasters.com/courses/intermediate-react-native-v2/). It was a great opportunity to deepen my skills in mobile development using React Native and Expo.

| ![Screenshot of plants list](/assets/Screenshot1.png) | ![Screenshot of Add plant form](/assets/Screenshot2.png) |
| :---------------------------------------------------: | :------------------------------------------------------: |

## Technologies Used

- React Native
- Expo
- React

🧭 Navigation & Routing

- Expo Router

🗂 State Management & Persistence

- Zustand
- React Native Async Storage

💬 UX & Native Features

- Expo Haptics
- Expo Quick Actions

🧑‍💻 Language

- TypeScript

## Some Insights & Highlights

### Screens & Navigation

Implemented routing using **`Expo Router`** with a combination of stacks and tabs:

- Onboarding Screen: Displayed on first launch before entering the main app.
- Main Navigation: Built with bottom tabs:
  - Home – list of added plants and access to detailed views
  - Profile – user-related info/settings
- Home Stack:
  - Plant List – displays all saved plants
  - Plant Card – detailed view with watering info and actions
- Modal Stack:
  -New Plant Form – allows users to add a new plant

Getting familiar with the navigation structure — especially with groups and \_layout.tsx files — was a bit challenging at first. But once I got used to it, the logic behind it became clear. But I need practice with it, I know ;)

### Custom Font Integration

Used **`@expo-font`** and **`@expo-google-fonts/caveat`** to apply a custom handwritten font across the app. Handled platform differences using `Platform.select`:

- On Android, the font can be referenced directly by file name.
- On iOS, you need to install the font in Font Book and use the PostScript Name instead.

```ts
// onboarding.tsx
fontFamily: Platform.select({
      android: "Caveat_400Regular.ttf",
      ios: "Caveat-Regular",
    }),
```

### Working with Dates

Used **`date-fns`** for formatting and calculating dates (e.g., tracking last watering time, calculating next watering date).

In my previous projects, I used dayjs, but for this app I tried date-fns — and really liked it. Its functional approach feels intuitive and composable. I’m definitely planning to use it again in future projects.

### Plant Photo Upload & Storage

Used **`expo-image-picker`** to allow users to upload a photo for each plant. Built a custom Image component to display either the uploaded image or a default placeholder.

On form submission, images are saved to device storage using **`expo-file-system`**.

One tricky part I encountered: after running `npx expo run:ios`, all stored images were gone. I learned that each build creates a new sandboxed environment, so previously saved files are wiped. It was not obvious ;)

### State Management

Used **`Zustand`** to manage global state such as the list of plants or user settings. It was handy for storing data in Async storage.

In my previous React projects, I relied on composition and React Context without introducing external state libraries. I was genuinely delighted by how convenient and lightweight Zustand is. The experience felt effortless, and I’ll definitely consider using it again in future projects.

For examples check `plantStore.ts` or `userStore.ts`.

### Quick Actions Integration

Used **`expo-quick-actions`** to add a shortcut for quickly opening the Add Plant form directly from the home screen icon (long-press gesture on supported devices).

### Haptic Feedback for Button Presses

Implemented subtle haptic feedback using expo-haptics to enhance the tactile experience when interacting with buttons.

Created a custom button component that triggers feedback on press:

```tsx
// PlantlyButton.tsx
function handlePress() {
  onPress();
  if (Platform.OS !== "web") {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
}
```

## Takeaways

- Building native apps with React Native and Expo is surprisingly convenient — it's easy to get started and very rewarding.

- Expo provides a wide range of tools and libraries out of the box. There's still a lot to explore, and I’m excited to dig deeper.

- Platform-specific nuances between iOS and Android are inevitable. Some are covered in courses, but many you need to learn through experience — it’s important to stay flexible and not get discouraged.

- Publishing to app stores can be a complex and time-consuming process. In some cases, building a PWA might be a more practical alternative.

- I appreciated Kadi Kraman’s approach to component naming: prefixing components with the project name (e.g., PlantlyButton) helps avoid naming collisions with library components.

- Creating a centralized `theme.ts` file for storing colors, spacing, and other design tokens made it easier to maintain consistent styling across the app.
