import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function UploadBox({ onUpload }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [drag, setDrag] = useState(false);

  const onFiles = async (files) => {
    setError("");
    const file = files?.[0];
    if (!file) return;
    if (!/(png|jpg|jpeg)$/i.test(file.name)) {
      setError("Unsupported file type. Please upload PNG or JPG.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("File too large. Max 20MB.");
      return;
    }
    onUpload?.(file);
  };

  return (
    <motion.div
      id="uploader"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative mt-[-4rem] z-10 mx-auto max-w-3xl rounded-2xl border ${drag ? "border-blue-400" : "border-white/10"} bg-white/5 backdrop-blur p-6`}
      aria-label="Upload area"
    >
      <div
        className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); onFiles(e.dataTransfer.files); }}
        aria-describedby="upload-help"
      >
        <div className="flex flex-col items-center gap-3 text-white">
          <Upload className="w-8 h-8 text-blue-300" aria-hidden="true" />
          <p className="font-semibold">Drop image here or click to upload</p>
          <p id="upload-help" className="text-sm text-slate-300">PNG/JPG up to 20MB</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg"
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
          aria-label="Upload image file"
        />
      </div>
      {error && <p className="mt-3 text-sm text-red-300" role="alert">{error}</p>}
    </motion.div>
  );
}
