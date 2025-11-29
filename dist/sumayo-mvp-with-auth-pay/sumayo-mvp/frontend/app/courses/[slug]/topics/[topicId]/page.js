'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopicPage;
const react_1 = require("react");
const axios_1 = require("axios");
function TopicPage({ params }) {
    const { slug, topicId } = params;
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handlePay = async () => {
        setLoading(true);
        try {
            const res = await axios_1.default.post('/api/payments/checkout-session', {
                topicId,
                successUrl: window.location.origin + `/courses/${slug}`,
                cancelUrl: window.location.origin + `/courses/${slug}`
            });
            const { url } = res.data;
            if (url)
                window.location.href = url;
        }
        catch (e) {
            alert('Error creating checkout session');
        }
        finally {
            setLoading(false);
        }
    };
    return (<main className="p-8">
      <h1 className="text-2xl font-bold">Tema {topicId} - {slug}</h1>
      <div className="mt-4">
        <p className="mb-4">Contenido del tema (video, resources...)</p>
        <div className="space-x-2">
          <button onClick={handlePay} disabled={loading} className="px-4 py-2 rounded bg-purple-600 text-white">
            {loading ? 'Redirigiendo...' : 'Comprar acceso (USD 9.99)'}
          </button>
        </div>
      </div>
    </main>);
}
//# sourceMappingURL=page.js.map