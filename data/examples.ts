export type ModernizationExample = {
  id: "legacy-frontend" | "api-workflows" | "php-platform";
  title: string;
  legacyLabel: string;
  modernLabel: string;
  legacyCode: string;
  modernCode: string;
  summary: string[];
  aiContribution: string[];
};

export const examples: ModernizationExample[] = [
  {
    id: "legacy-frontend",
    title: "Reworking a legacy frontend into a modern app workflow",
    legacyLabel: "Older frontend pattern",
    modernLabel: "Modernized app flow",
    legacyCode: `$(function () {
  $("#promo-toggle").on("click", function () {
    $(".promo-panel").toggleClass("is-open");
    var current = $("#promo-copy").text();
    if (current === "Legacy Promo") {
      $("#promo-copy").text("Modern Promo");
    } else {
      $("#promo-copy").text("Legacy Promo");
    }
  });

  $.get("/api/offers", function (data) {
    $("#offer-count").text(data.total);
  });
});`,
    modernCode: `'use client';

import { useEffect, useState } from 'react';

type OfferResponse = { total: number };

export default function PromoPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [copy, setCopy] = useState('Legacy Promo');
  const [offerCount, setOfferCount] = useState<number | null>(null);

  useEffect(() => {
    async function loadOffers() {
      const res = await fetch('/api/offers');
      const data: OfferResponse = await res.json();
      setOfferCount(data.total);
    }

    loadOffers();
  }, []);

  return (
    <section className="panel">
      <button
        id="promo-toggle"
        onClick={() => {
          setIsOpen((value) => !value);
          setCopy((value) =>
            value === 'Legacy Promo' ? 'Modern Promo' : 'Legacy Promo'
          );
        }}
      >
        Toggle promo
      </button>

      <div className={isOpen ? 'promo-panel is-open' : 'promo-panel'}>
        <p id="promo-copy">{copy}</p>
        <p>Offer count: {offerCount ?? 'Loading...'}</p>
      </div>
    </section>
  );
}`,
    summary: [
      "Upgraded the app and dependency stack so the frontend was running on a current toolchain instead of an aging setup.",
      "Refactored the styling pipeline and page structure to make layouts, navigation, and content-driven pages easier to extend.",
      "Added trusted local HTTPS and fixed production-versus-development parity issues that were slowing down iteration."
    ],
    aiContribution: [
      "Used AI to break down the migration into smaller refactor passes instead of trying to rewrite the frontend all at once.",
      "Used AI to analyze the legacy UI, carry over the existing look and feel, and map that experience onto more modern frontend patterns and standards.",
      "Used AI to draft implementation approaches for auth screens, page composition, and styling-pipeline changes before refining them manually.",
      "Used AI as a working scratchpad for upgrade notes, cleanup passes, and follow-up tasks as the frontend stabilized."
    ]
  },
  {
    id: "api-workflows",
    title: "Modernizing an API and adding AI-assisted operational workflows",
    legacyLabel: "Ad hoc service logic",
    modernLabel: "Structured API workflow",
    legacyCode: `app.post('/recover', function (req, res) {
  if (!req.body.email) {
    return res.status(500).send('missing email');
  }

  db.query(
    "SELECT * FROM users WHERE email = '" + req.body.email + "'",
    function (err, rows) {
      if (err) return res.status(500).send(err);

      mailer.send({
        to: req.body.email,
        subject: 'Reset',
        text: 'Use the old reset flow'
      });

      res.send({ ok: true });
    }
  );
});`,
    modernCode: `app.post('/password-recovery', async (req, res) => {
  const email = normalizeEmail(req.body.email);

  if (!email) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const user = await users.findByEmail(email);
  const token = await recoveryTokens.issueForUser(user?.id);

  await notifications.sendPasswordRecovery({
    email,
    token,
    requestedAt: new Date().toISOString()
  });

  audit.info('password recovery requested', { email });
  return res.json({ ok: true });
});`,
    summary: [
      "Improved authentication, registration, and password recovery flows while cleaning up the surrounding service structure.",
      "Added recurring import jobs, time-zone fixes, and clearer logging so scheduled workflows were easier to trust and debug.",
      "Tightened environment handling and JWT-related behavior so the API behaved more consistently across development and production."
    ],
    aiContribution: [
      "Used AI to draft endpoint updates and service shapes for account recovery, validation, and auth-related changes.",
      "Used AI to map out automation steps for scheduled imports, runtime cadence, and environment-specific behavior before implementing them.",
      "Used AI to generate first-pass ideas for tests, logging, and rollback notes, then adjusted them against real API behavior."
    ]
  },
  {
    id: "php-platform",
    title: "Restoring a legacy PHP platform to current compatibility",
    legacyLabel: "Legacy PHP 5",
    modernLabel: "Current PHP-compatible flow",
    legacyCode: `<?php
mysql_connect($host, $user, $pass);
mysql_select_db($db);

$id = $_GET['id'];
$result = mysql_query("SELECT * FROM pages WHERE id = $id");
$row = mysql_fetch_array($result);

echo "<h1>" . $row['title'] . "</h1>";
echo $row['body'];
?>`,
    modernCode: `<?php
declare(strict_types=1);

require_once 'db.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    http_response_code(400);
    exit('Invalid page id');
}

$pdo = getPdoConnection();

$stmt = $pdo->prepare(
    'SELECT title, body FROM pages WHERE id = :id'
);
$stmt->execute(['id' => $id]);

$page = $stmt->fetch();

if (!$page) {
    http_response_code(404);
    exit('Page not found');
}
?>
<h1><?= htmlspecialchars($page['title'], ENT_QUOTES, 'UTF-8') ?></h1>
<div><?= $page['body'] ?></div>`,
    summary: [
      "Brought an older PHP application up to current compatibility so it could run cleanly on a modern runtime again.",
      "Repaired broken workflows, restored imports and score-processing paths, and cleaned up request handling in unstable areas.",
      "Improved targeted performance hotspots while stabilizing the parts of the platform that had drifted or stopped working."
    ],
    aiContribution: [
      "Used AI to surface deprecated PHP patterns and build an initial compatibility checklist for the upgrade.",
      "Used AI to trace likely breakpoints across imports, scores, account actions, and rendered pages before debugging them directly.",
      "Used Codex to focus on a specific inefficient process, point it at the right problem areas, and reduce a compile path that was taking almost [[red:10 minutes]] down to about [[red:0.1 seconds]].",
      "Used AI to organize restoration notes and rollout steps so the same recovery process could be repeated across related legacy areas."
    ]
  }
];
