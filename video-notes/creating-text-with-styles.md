Welcome to One Minute Coding Episode 2!

In the previous video, we moved away from `expo-router` in favor of `react-navigation`.

In this second episode, we're gonna' focus creating a basic Text component and providing some styles.

We'll set the `fontSize`, `textAlign`, `fontWeight`, `height`, `width`, and `backgroundColor` for the Text component.

Before we do that, you'll notice that I use a component called `SafeAreaView`. Most, if not all, of the new iPhone models have a *notch* at the top of the phone. By default, your code will ignore the entire top row (which includes time/notch/wifi/battery/etc).

In the beginning of this second video, you'll see that the Text used in the previous video is at the top left of the screen - with the first few letters being cut off from view. The text it there *in spirit*, it's just cut off by the `borderRadius` of the device.

P.S., Off camera before this video, I deleted the default folders:
1. ./app/
2. ./components/
3. ./constants/
4. ./hooks/
5. ./scripts/