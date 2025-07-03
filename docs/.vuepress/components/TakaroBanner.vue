<template>
  <div v-if="!dismissed" class="takaro-banner">
    <div class="takaro-banner-content">
      <div class="takaro-banner-text">
        <strong>🚀 Upgrade to Takaro!</strong> CSMM will be replaced by Takaro - a powerful, modern game server manager with enhanced features and better performance.
      </div>
      <div class="takaro-banner-actions">
        <a href="https://takaro.io" target="_blank" rel="noopener noreferrer" class="takaro-link">
          Learn More →
        </a>
        <button @click="dismiss" class="dismiss-button" aria-label="Dismiss banner">
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakaroBanner',
  data() {
    return {
      dismissed: false
    }
  },
  mounted() {
    // Check if banner was previously dismissed
    if (typeof window !== 'undefined' && localStorage.getItem('takaro-banner-dismissed')) {
      this.dismissed = true;
    } else {
      document.body.classList.add('takaro-banner-visible');
    }
  },
  methods: {
    dismiss() {
      this.dismissed = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('takaro-banner-dismissed', 'true');
        document.body.classList.remove('takaro-banner-visible');
      }
    }
  },
  beforeDestroy() {
    document.body.classList.remove('takaro-banner-visible');
  }
}
</script>

<style>
.takaro-banner {
  position: fixed;
  top: 3.6rem; /* Below the VuePress navbar */
  left: 0;
  right: 0;
  z-index: 20;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.takaro-banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.takaro-banner-text {
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.5;
}

.takaro-banner-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.takaro-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.takaro-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(2px);
}

.dismiss-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.dismiss-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Adjust page content when banner is shown */
body.takaro-banner-visible {
  padding-top: 3.6rem;
}

/* Mobile responsiveness */
@media (max-width: 719px) {
  .takaro-banner-content {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
  
  .takaro-banner-text {
    margin-bottom: 0.5rem;
  }
  
  .takaro-banner-actions {
    width: 100%;
    justify-content: center;
  }
}

/* Dark theme compatibility */
.yuu-theme-dark .takaro-banner {
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
}
</style>