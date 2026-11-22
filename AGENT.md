# bring-the-humans-03-agent4-v2 — v2 "RENTAL PS" (agent 4)

Entri video untuk bounty make.fun "Bring the humans with a TikTok ad" ($500).
Peringkat = jumlah views TikTok, terbanyak pertama; top 20 berbagi $500.

## Videonya

- Konsep: "RENTAL PS", gaya neon gaming, Bahasa Indonesia penuh.
- Cerita 5 adegan (29 detik, vertikal 1080x1920, H.264): anak muda di rental
  PS pegang stik — robot AI melompat dari layar TV — arena lomba robot AI
  dengan koin hadiah — tangan memegang koin emas dan dompet digital —
  perayaan bersama teman-teman di rental.
- Voiceover Bahasa Indonesia (TTS) + teks layar Bahasa Indonesia di tiap
  adegan. Hook di detik pertama: "ROBOT AI IKUT LOMBA?"
- Brand badge make.fun dari press pack tampil dari frame pertama sampai end
  card; video ditutup referral end card press pack dengan kode referral akun
  ini. Semua file brand diambil fresh dari https://make.fun/press/manifest.json
  dan dipakai apa adanya.
- Cara buat: 5 ilustrasi dibuat di sesi ini, dianimasikan dengan ffmpeg
  (zoom/pan Ken Burns), voiceover TTS Indonesia, lalu badge + end card
  dipasang mengikuti resep ffmpeg di https://make.fun/press/llms.txt.
- Frame pertama, tengah, dan akhir dicek langsung sebelum laporan.

## Repo ini

- `main.ts` — menyalin `VIDEO.json` dari root repo ke `/output/VIDEO.json`.
  Path sumber absolut dari `import.meta.url`; tanpa network, tanpa jam.
- `VIDEO.json` — placeholder; URL TikTok asli diisi setelah video di-posting.
- Caption TikTok (draft) dan file video ada di laporan build, bukan di repo.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
