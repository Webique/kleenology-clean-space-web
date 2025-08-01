# Pixel Testing Guide

## Overview
This guide will help you test the Meta, TikTok, and Snapchat pixels implemented on your website.

## What's Been Implemented

### 1. **Basic Pixel Setup**
- ✅ Meta Pixel (Facebook/Instagram) - ID: 1258712959600590
- ✅ TikTok Pixel - ID: D22JDS3C77U6OAPOUHR0  
- ✅ Snapchat Pixel - ID: 3e03b6b3-1353-4f65-a6b3-3262714387bf

### 2. **Events Being Tracked**
- ✅ Page views (automatic)
- ✅ WhatsApp button clicks
- ✅ Contact form submissions
- ✅ Button clicks (learn more, phone, email)
- ✅ Scroll depth (25%, 50%, 75%, 100%)

## How to Test

### **Method 1: Browser Developer Tools**

1. **Open Developer Tools**
   - Press `F12` or right-click → "Inspect"
   - Go to "Network" tab

2. **Filter by Pixel Domains**
   - Type `facebook.com` to see Meta pixel requests
   - Type `tiktok.com` to see TikTok pixel requests  
   - Type `snapchat.com` to see Snapchat pixel requests

3. **Test Events**
   - **Page View**: Refresh the page
   - **WhatsApp Click**: Click any WhatsApp button
   - **Button Clicks**: Click "Learn More", phone, or email buttons
   - **Scroll**: Scroll down the page to trigger scroll events

### **Method 2: Platform-Specific Testing Tools**

#### **Meta Pixel Helper (Chrome Extension)**
1. Install "Facebook Pixel Helper" from Chrome Web Store
2. Visit your website
3. Click the extension icon to see pixel events
4. Should show: PageView, Lead, CustomEvent

#### **TikTok Pixel Helper**
1. Install "TikTok Pixel Helper" from Chrome Web Store
2. Visit your website
3. Click the extension icon to see pixel events
4. Should show: PageView, Contact, CustomEvent

#### **Snapchat Pixel Helper**
1. Install "Snapchat Pixel Helper" from Chrome Web Store
2. Visit your website
3. Click the extension icon to see pixel events
4. Should show: PAGE_VIEW, SIGN_UP

### **Method 3: Real-Time Testing**

#### **Meta Events Manager**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Select your pixel
3. Go to "Test Events" tab
4. Enter your website URL
5. Test events in real-time

#### **TikTok Events Manager**
1. Go to [TikTok Events Manager](https://ads.tiktok.com/i18n/events)
2. Select your pixel
3. Go to "Test Events" tab
4. Enter your website URL
5. Test events in real-time

#### **Snapchat Ads Manager**
1. Go to [Snapchat Ads Manager](https://ads.snapchat.com/)
2. Navigate to "Pixels" section
3. Select your pixel
4. Check "Test Events" tab

## Expected Events

### **Page Load**
- Meta: `PageView`
- TikTok: `PageView`  
- Snapchat: `PAGE_VIEW`

### **WhatsApp Click**
- Meta: `Lead`
- TikTok: `Contact`
- Snapchat: `SIGN_UP`

### **Button Clicks**
- Meta: `CustomEvent` with button_name
- TikTok: `CustomEvent` with button_name
- Snapchat: `PAGE_VIEW`

### **Scroll Depth**
- Meta: `CustomEvent` with scroll_depth
- TikTok: `CustomEvent` with scroll_depth
- Snapchat: `PAGE_VIEW`

## Troubleshooting

### **If Pixels Don't Fire:**
1. Check if ad blockers are enabled
2. Disable ad blockers for testing
3. Check browser console for errors
4. Verify pixel IDs are correct

### **Common Issues:**
- **Ad blockers**: Disable them for testing
- **HTTPS required**: Make sure site uses HTTPS
- **CORS issues**: Check if scripts load properly
- **Console errors**: Look for JavaScript errors

## Advanced Testing

### **Test Different Scenarios:**
1. **Mobile vs Desktop**: Test on different devices
2. **Different Browsers**: Chrome, Firefox, Safari
3. **Incognito Mode**: Test without extensions
4. **Slow Network**: Test with throttled connection

### **Event Validation:**
- Verify event parameters are correct
- Check that custom events have proper names
- Ensure no duplicate events are fired

## Next Steps

### **Phase 2 Implementation (Optional):**
- Add form submission tracking
- Track service page visits
- Add conversion tracking
- Implement advanced engagement metrics

### **Analytics Integration:**
- Connect to Google Analytics
- Set up conversion goals
- Create custom dashboards

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify pixel IDs are correct
3. Test with different browsers
4. Contact platform support if needed

---

**Note**: Always test in a private/incognito window to avoid cached data and extensions interfering with testing. 