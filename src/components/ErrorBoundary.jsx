import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null }; // حفظ التفاصيل عن الخطأ
  }

  static getDerivedStateFromError() {
    // إذا وقع خطأ، نغير حالة hasError إلى true
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // تسجيل الخطأ في الكونسل للمراجعة
    console.error("Error caught by Error Boundary:", error, info);
    // يمكن هنا إرسال الخطأ إلى نظام التسجيل الخاص بك مثل Sentry أو غيره
    this.setState({ errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      // عرض رسالة الخطأ للمستخدم
      return (
        <div>
          <h1>Something went wrong. Please try again later.</h1>
          <details>
            <summary>Click for more details</summary>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; // إذا لم يحدث خطأ، عرض المكونات الداخلية
  }
}

export default ErrorBoundary;
