import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const colors = {
  dark: "#28313F",
  light: "#EFF0F2",
  green: "#38C682",
  gray: "#797979",
  blue: "#004AAD",
};

const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: colors.light,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
  },
  phone: {
    width: "390px",
    height: "844px",
    backgroundColor: colors.light,
    borderRadius: "44px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
};

// ─── WELCOME SCREEN ───────────────────────────────────────────────────────────
function WelcomeScreen({ onEnter }) {
  return (
    <div style={{
      flex: 1, background: `linear-gradient(160deg, ${colors.dark} 0%, #1a2230 100%)`,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "40px", gap: "48px",
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{
          background: "rgba(255,255,255,0.06)", borderRadius: "24px",
          padding: "28px 40px", border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <span style={{ color: "#fff", fontSize: "32px", fontWeight: "700", letterSpacing: "8px" }}>NILFISK</span>
        </div>
        <span style={{ color: colors.gray, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Gestão Logística
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", width: "100%" }}>
        <div style={{ width: "48px", height: "2px", background: colors.green, borderRadius: "2px" }} />
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textAlign: "center", lineHeight: "1.6" }}>
          Controle total do fluxo logístico das suas máquinas
        </p>
      </div>

      <button onClick={onEnter} style={{
        background: colors.green, color: "#fff", border: "none",
        borderRadius: "16px", padding: "18px 48px", fontSize: "16px",
        fontWeight: "600", fontFamily: "'Poppins', sans-serif",
        cursor: "pointer", width: "100%", letterSpacing: "0.5px",
        boxShadow: `0 8px 24px rgba(56,198,130,0.35)`,
        transition: "transform 0.15s",
      }}>
        Entrar
      </button>
    </div>
  );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("admin@nilfisk.com");
  const [password, setPassword] = useState("Mudar2026@1");
  const [showForgot, setShowForgot] = useState(false);

  const inputStyle = {
    width: "100%", padding: "14px 16px", borderRadius: "12px",
    border: `1.5px solid rgba(40,49,63,0.15)`, background: "#fff",
    fontSize: "14px", fontFamily: "'Poppins', sans-serif", color: colors.dark,
    outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      background: `linear-gradient(160deg, ${colors.dark} 0%, #1a2230 60%, ${colors.light} 60%)`,
      padding: "0",
    }}>
      <div style={{ padding: "60px 32px 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={{ color: "#fff", fontSize: "26px", fontWeight: "700" }}>Bem-vindo</span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Faça login para continuar</span>
      </div>

      <div style={{
        flex: 1, background: colors.light, borderRadius: "28px 28px 0 0",
        padding: "36px 28px", display: "flex", flexDirection: "column", gap: "20px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "12px", fontWeight: "600", color: colors.dark, letterSpacing: "0.5px" }}>EMAIL</label>
          <input style={inputStyle} type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "12px", fontWeight: "600", color: colors.dark, letterSpacing: "0.5px" }}>SENHA</label>
          <input style={inputStyle} type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={() => setShowForgot(true)} style={{
            background: "none", border: "none", color: colors.blue,
            fontSize: "13px", fontFamily: "'Poppins', sans-serif",
            cursor: "pointer", textAlign: "right", padding: "0",
          }}>Esqueci a senha</button>
        </div>

        <button onClick={onLogin} style={{
          background: colors.dark, color: "#fff", border: "none",
          borderRadius: "14px", padding: "16px", fontSize: "15px",
          fontWeight: "600", fontFamily: "'Poppins', sans-serif",
          cursor: "pointer", marginTop: "8px",
          boxShadow: "0 8px 24px rgba(40,49,63,0.2)",
        }}>
          Entrar
        </button>

        {showForgot && (
          <div style={{
            background: "#fff", borderRadius: "14px", padding: "16px",
            border: `1px solid rgba(56,198,130,0.3)`, fontSize: "13px", color: colors.gray,
          }}>
            📧 Um link de recuperação foi enviado para seu email.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  const items = [
    { id: "home", label: "Home", icon: "⊞" },
    { id: "entregas", label: "Entregas", icon: "🚚" },
    { id: "relatorios", label: "Relatórios", icon: "📊" },
    { id: "perfil", label: "Perfil", icon: "👤" },
  ];

  return (
    <div style={{
      background: "#fff", borderTop: `1px solid rgba(0,0,0,0.07)`,
      display: "flex", justifyContent: "space-around", padding: "8px 0 20px",
    }}>
      {items.map(item => (
        <button key={item.id} onClick={() => onChange(item.id)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "4px", padding: "8px 16px", borderRadius: "12px",
          transition: "background 0.2s",
        }}>
          <span style={{ fontSize: "20px" }}>{item.icon}</span>
          <span style={{
            fontSize: "10px", fontFamily: "'Poppins', sans-serif",
            fontWeight: active === item.id ? "600" : "400",
            color: active === item.id ? colors.green : colors.gray,
          }}>{item.label}</span>
          {active === item.id && (
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: colors.green }} />
          )}
        </button>
      ))}
    </div>
  );
}

// ─── FAB ──────────────────────────────────────────────────────────────────────
function FAB({ onClick }) {
  return (
    <button onClick={onClick} style={{
      position: "absolute", bottom: "90px", right: "24px",
      background: colors.green, color: "#fff", border: "none",
      borderRadius: "20px", padding: "14px 20px", fontSize: "13px",
      fontWeight: "600", fontFamily: "'Poppins', sans-serif",
      cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
      boxShadow: `0 8px 24px rgba(56,198,130,0.4)`, zIndex: 100,
    }}>
      <span style={{ fontSize: "18px" }}>+</span> Novo Processo
    </button>
  );
}

// ─── HOME SCREEN ──────────────────────────────────────────────────────────────
function HomeScreen({ userType, onNewProcess }) {
  const isAdmin = userType === "admin";
  const isLogistica = userType === "logistica";

  const adminStats = [
    { label: "Total Pedidos", value: "142", color: colors.blue },
    { label: "Enviados", value: "89", color: colors.green },
    { label: "Entregues", value: "76", color: colors.green },
    { label: "Atrasados", value: "8", color: "#e74c3c" },
    { label: "Sinistros", value: "2", color: "#e74c3c" },
    { label: "Custo Frete", value: "R$24.8k", color: colors.dark },
  ];

  const entradaStats = [
    { label: "Pedidos Cadastrados", value: "34", color: colors.blue, icon: "📋" },
    { label: "Em Oficina", value: "12", color: "#f39c12", icon: "🔧" },
    { label: "Em Embalagem", value: "6", color: colors.green, icon: "📦" },
  ];

  const logisticaStats = [
    { label: "Em Transporte", value: "18", color: colors.blue, icon: "🚚" },
    { label: "Atrasadas", value: "4", color: "#e74c3c", icon: "⚠️" },
    { label: "Finalizadas", value: "52", color: colors.green, icon: "✅" },
  ];

  const stats = isAdmin ? null : isLogistica ? logisticaStats : entradaStats;

  const recentItems = [
    { id: "PED-2401", client: "Supermercado BH", status: "Em Transporte", statusColor: colors.blue },
    { id: "PED-2400", client: "Hospital Albert Einstein", status: "Entregue", statusColor: colors.green },
    { id: "PED-2399", client: "Shopping Paulista", status: "Ocorrência", statusColor: "#e74c3c" },
    { id: "PED-2398", client: "Colégio Objetivo", status: "Embalagem", statusColor: "#f39c12" },
  ];

  return (
    <div style={{ flex: 1, overflow: "auto", padding: "0 0 80px" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.dark} 0%, #1e2a3a 100%)`,
        padding: "56px 24px 32px", borderRadius: "0 0 28px 28px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>Bem-vindo de volta,</p>
            <h2 style={{ color: "#fff", fontSize: "20px", margin: "4px 0 0", fontWeight: "700" }}>
              {isAdmin ? "Administrador" : isLogistica ? "Equipe Logística" : "Equipe Pedidos"}
            </h2>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)", borderRadius: "50%",
            width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "20px" }}>🔔</span>
          </div>
        </div>

        {/* Admin Stats Grid */}
        {isAdmin && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "24px" }}>
            {adminStats.map(s => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.08)", borderRadius: "14px",
                padding: "14px 10px", textAlign: "center",
              }}>
                <p style={{ color: s.color, fontSize: "18px", fontWeight: "700", margin: 0 }}>{s.value}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "9px", margin: "4px 0 0", lineHeight: "1.3" }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        {/* Non-admin stats */}
        {stats && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: "#fff", borderRadius: "16px", padding: "16px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "22px" }}>{s.icon}</span>
                  <span style={{ fontSize: "14px", color: colors.dark, fontWeight: "500" }}>{s.label}</span>
                </div>
                <span style={{ fontSize: "22px", fontWeight: "700", color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Recent Activity */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: colors.dark, margin: 0 }}>Processos Recentes</h3>
          <button style={{ background: "none", border: "none", color: colors.blue, fontSize: "13px", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
            Ver todos
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {recentItems.map(item => (
            <div key={item.id} style={{
              background: "#fff", borderRadius: "16px", padding: "16px 20px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              borderLeft: `3px solid ${item.statusColor}`,
            }}>
              <div>
                <p style={{ fontSize: "13px", fontWeight: "700", color: colors.dark, margin: 0 }}>{item.id}</p>
                <p style={{ fontSize: "12px", color: colors.gray, margin: "2px 0 0" }}>{item.client}</p>
              </div>
              <span style={{
                background: `${item.statusColor}18`, color: item.statusColor,
                borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: "600",
              }}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── NEW PROCESS FLOW ─────────────────────────────────────────────────────────
function NewProcessFlow({ onBack }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    numeroPedido: "", numeroNF: "", numeroNFRetorno: "",
    cliente: "", contato: "", vendedor: "",
    tipoOperacao: "", oficina: false, embalagem: false,
    dataOficina: "", numeroSerie: "", acessorios: "", observacoes: "",
    checklist: {},
  });

  const checklistItems = [
    "Cabo carregamento", "Escova", "Suporte de disco", "Disco abrasivo",
    "Carregador", "Chave", "Saia", "Rodo", "Manual",
    "Confirmação de número de série", "Confirmação de quantidade",
  ];

  const tiposOperacao = ["Saída", "Retorno", "Locação", "Venda", "Demo"];

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: "12px",
    border: `1.5px solid rgba(40,49,63,0.12)`, background: "#fff",
    fontSize: "14px", fontFamily: "'Poppins', sans-serif", color: colors.dark,
    outline: "none", boxSizing: "border-box",
  };

  const steps = [
    { title: "Dados do Pedido", icon: "📋" },
    { title: "Tipo de Operação", icon: "⚙️" },
    { title: "Setup do Processo", icon: "🔧" },
    { title: "Checklist", icon: "✅" },
    { title: "Fotos da Máquina", icon: "📷" },
  ];

  const allChecked = checklistItems.every(i => form.checklist[i]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: colors.light }}>
      {/* Header */}
      <div style={{
        background: colors.dark, padding: "56px 20px 20px",
        display: "flex", alignItems: "center", gap: "16px",
      }}>
        <button onClick={onBack} style={{
          background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "12px",
          padding: "10px", cursor: "pointer", color: "#fff", fontSize: "16px",
        }}>←</button>
        <div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", margin: 0 }}>
            Passo {step + 1} de {steps.length}
          </p>
          <h2 style={{ color: "#fff", fontSize: "18px", margin: "2px 0 0", fontWeight: "700" }}>
            {steps[step].icon} {steps[step].title}
          </h2>
        </div>
      </div>

      {/* Progress */}
      <div style={{ background: "rgba(40,49,63,0.1)", height: "3px" }}>
        <div style={{
          height: "100%", background: colors.green,
          width: `${((step + 1) / steps.length) * 100}%`,
          transition: "width 0.3s ease",
        }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "24px 20px" }}>
        {step === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { label: "Número do Pedido", key: "numeroPedido", placeholder: "PED-2402" },
              { label: "Número da NF", key: "numeroNF", placeholder: "NF-00123" },
              { label: "NF de Retorno", key: "numeroNFRetorno", placeholder: "Opcional" },
              { label: "Cliente", key: "cliente", placeholder: "Nome do cliente" },
              { label: "Email de Contato", key: "contato", placeholder: "contato@empresa.com" },
              { label: "Vendedor", key: "vendedor", placeholder: "Nome do vendedor" },
            ].map(field => (
              <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", fontWeight: "600", color: colors.dark, letterSpacing: "0.5px" }}>
                  {field.label.toUpperCase()}
                </label>
                <input
                  style={inputStyle}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                />
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "14px", color: colors.gray, margin: "0 0 8px" }}>Selecione o tipo de operação:</p>
            {tiposOperacao.map(tipo => (
              <button key={tipo} onClick={() => setForm({ ...form, tipoOperacao: tipo })} style={{
                background: form.tipoOperacao === tipo ? colors.dark : "#fff",
                color: form.tipoOperacao === tipo ? "#fff" : colors.dark,
                border: `2px solid ${form.tipoOperacao === tipo ? colors.dark : "rgba(0,0,0,0.08)"}`,
                borderRadius: "14px", padding: "18px 20px", fontSize: "15px",
                fontWeight: "600", fontFamily: "'Poppins', sans-serif",
                cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                {tipo}
                {form.tipoOperacao === tipo && <span style={{ color: colors.green }}>✓</span>}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ fontSize: "14px", color: colors.gray, margin: "0 0 8px" }}>Configure as etapas do processo:</p>
            {[
              { key: "oficina", label: "Oficina", icon: "🔧", desc: "Enviar para manutenção/reparo" },
              { key: "embalagem", label: "Embalagem", icon: "📦", desc: "Preparar para envio" },
            ].map(option => (
              <button key={option.key} onClick={() => setForm({ ...form, [option.key]: !form[option.key] })} style={{
                background: form[option.key] ? `${colors.green}12` : "#fff",
                border: `2px solid ${form[option.key] ? colors.green : "rgba(0,0,0,0.08)"}`,
                borderRadius: "16px", padding: "20px",
                cursor: "pointer", textAlign: "left", display: "flex", gap: "16px", alignItems: "center",
              }}>
                <span style={{ fontSize: "28px" }}>{option.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: "600", color: colors.dark, fontFamily: "'Poppins', sans-serif" }}>{option.label}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "12px", color: colors.gray, fontFamily: "'Poppins', sans-serif" }}>{option.desc}</p>
                </div>
                <div style={{
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: form[option.key] ? colors.green : "rgba(0,0,0,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {form[option.key] && <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>}
                </div>
              </button>
            ))}

            {form.oficina && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", fontWeight: "600", color: colors.dark }}>DATA DE ENTRADA NA OFICINA</label>
                <input type="date" style={inputStyle} value={form.dataOficina} onChange={e => setForm({ ...form, dataOficina: e.target.value })} />
              </div>
            )}

            {form.embalagem && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: "600", color: colors.dark }}>NÚMERO DE SÉRIE</label>
                  <input style={inputStyle} placeholder="SN-000000" value={form.numeroSerie} onChange={e => setForm({ ...form, numeroSerie: e.target.value })} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: "600", color: colors.dark }}>ACESSÓRIOS</label>
                  <input style={inputStyle} placeholder="Liste os acessórios..." value={form.acessorios} onChange={e => setForm({ ...form, acessorios: e.target.value })} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: "600", color: colors.dark }}>OBSERVAÇÕES</label>
                  <textarea style={{ ...inputStyle, minHeight: "80px", resize: "none" }} placeholder="Observações..." value={form.observacoes} onChange={e => setForm({ ...form, observacoes: e.target.value })} />
                </div>
              </>
            )}
          </div>
        )}

        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{
              background: allChecked ? `${colors.green}15` : `rgba(255,193,7,0.1)`,
              border: `1px solid ${allChecked ? colors.green : "#ffc107"}`,
              borderRadius: "12px", padding: "12px 16px", marginBottom: "8px",
            }}>
              <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: allChecked ? colors.green : "#f39c12" }}>
                {checklistItems.filter(i => form.checklist[i]).length}/{checklistItems.length} itens verificados
              </p>
            </div>
            {checklistItems.map(item => (
              <button key={item} onClick={() => setForm({
                ...form,
                checklist: { ...form.checklist, [item]: !form.checklist[item] },
              })} style={{
                background: "#fff", border: `2px solid ${form.checklist[item] ? colors.green : "rgba(0,0,0,0.08)"}`,
                borderRadius: "14px", padding: "16px",
                cursor: "pointer", display: "flex", alignItems: "center", gap: "12px",
              }}>
                <div style={{
                  width: "24px", height: "24px", borderRadius: "8px", flexShrink: 0,
                  background: form.checklist[item] ? colors.green : "rgba(0,0,0,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {form.checklist[item] && <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>}
                </div>
                <span style={{
                  fontSize: "14px", fontFamily: "'Poppins', sans-serif",
                  color: form.checklist[item] ? colors.dark : colors.gray,
                  fontWeight: form.checklist[item] ? "600" : "400",
                  textDecoration: form.checklist[item] ? "none" : "none",
                }}>{item}</span>
              </button>
            ))}
          </div>
        )}

        {step === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "14px", color: colors.gray, margin: "0 0 8px" }}>
              Tire as fotos obrigatórias da máquina:
            </p>
            {[
              { label: "Máquina Completa", icon: "📷", required: true },
              { label: "Acessórios", icon: "🔩", required: true },
              { label: "Máquina Embalada", icon: "📦", required: true },
            ].map((foto, idx) => (
              <div key={foto.label} style={{
                background: "#fff", borderRadius: "16px", padding: "20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                border: "2px dashed rgba(0,0,0,0.1)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "28px" }}>{foto.icon}</span>
                  <div>
                    <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: colors.dark }}>{foto.label}</p>
                    {foto.required && <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#e74c3c" }}>Obrigatório</p>}
                  </div>
                </div>
                <button style={{
                  background: colors.dark, color: "#fff", border: "none",
                  borderRadius: "10px", padding: "10px 16px", fontSize: "12px",
                  fontWeight: "600", fontFamily: "'Poppins', sans-serif", cursor: "pointer",
                }}>
                  Tirar Foto
                </button>
              </div>
            ))}

            <div style={{
              background: `${colors.green}12`, border: `1px solid ${colors.green}`,
              borderRadius: "14px", padding: "16px", textAlign: "center",
            }}>
              <p style={{ margin: 0, fontSize: "13px", color: colors.green, fontWeight: "600" }}>
                ✓ Processo pronto para envio após conclusão
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer buttons */}
      <div style={{
        padding: "16px 20px 28px", background: "#fff",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        display: "flex", gap: "12px",
      }}>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} style={{
            flex: 1, background: "rgba(0,0,0,0.06)", color: colors.dark,
            border: "none", borderRadius: "14px", padding: "16px",
            fontSize: "14px", fontWeight: "600", fontFamily: "'Poppins', sans-serif", cursor: "pointer",
          }}>
            Voltar
          </button>
        )}
        <button
          onClick={() => step < steps.length - 1 ? setStep(step + 1) : onBack()}
          disabled={step === 3 && !allChecked}
          style={{
            flex: 2, background: (step === 3 && !allChecked) ? colors.gray : colors.green,
            color: "#fff", border: "none", borderRadius: "14px", padding: "16px",
            fontSize: "14px", fontWeight: "600", fontFamily: "'Poppins', sans-serif",
            cursor: (step === 3 && !allChecked) ? "not-allowed" : "pointer",
          }}>
          {step === steps.length - 1 ? "Finalizar" : "Continuar"}
        </button>
      </div>
    </div>
  );
}

// ─── ENTREGAS SCREEN ──────────────────────────────────────────────────────────
function EntregasScreen() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const filters = ["todos", "transporte", "entregue", "ocorrência", "sinistro"];

  const deliveries = [
    { id: "PED-2401", client: "Supermercado BH", transport: "DHL Express", eta: "10/03/2026", status: "transporte", value: "R$ 320,00", driver: "Carlos Souza", plate: "ABC-1234" },
    { id: "PED-2399", client: "Shopping Paulista", transport: "Jadlog", eta: "09/03/2026", status: "ocorrência", value: "R$ 180,00", driver: "José Lima", plate: "DEF-5678", occurrence: "Avaria no transporte" },
    { id: "PED-2398", client: "Colégio Objetivo", transport: "Correios", eta: "11/03/2026", status: "transporte", value: "R$ 95,00", driver: "Ana Paula", plate: "GHI-9012" },
    { id: "PED-2396", client: "Prefeitura SP", transport: "Total Express", eta: "07/03/2026", status: "entregue", value: "R$ 240,00", driver: "Roberto Faria", plate: "JKL-3456" },
    { id: "PED-2395", client: "Unimed BH", transport: "TNT", eta: "06/03/2026", status: "sinistro", value: "R$ 560,00", driver: "Paulo Santos", plate: "MNO-7890" },
  ];

  const statusColors = {
    transporte: colors.blue,
    entregue: colors.green,
    ocorrência: "#f39c12",
    sinistro: "#e74c3c",
  };

  const statusLabels = {
    transporte: "Em Transporte",
    entregue: "Entregue",
    ocorrência: "Ocorrência",
    sinistro: "Sinistro",
  };

  const filtered = activeFilter === "todos" ? deliveries : deliveries.filter(d => d.status === activeFilter);

  if (selectedDelivery) {
    const d = selectedDelivery;
    const statusColor = statusColors[d.status];

    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
        <div style={{ background: colors.dark, padding: "56px 20px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={() => setSelectedDelivery(null)} style={{
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "12px",
            padding: "10px", cursor: "pointer", color: "#fff", fontSize: "16px",
          }}>←</button>
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", margin: 0 }}>Detalhes da Entrega</p>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "2px 0 0", fontWeight: "700" }}>{d.id}</h2>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "20px" }}>
          <div style={{
            background: `${statusColor}12`, border: `1px solid ${statusColor}30`,
            borderRadius: "14px", padding: "16px 20px", marginBottom: "16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: statusColor }}>
              {statusLabels[d.status]}
            </span>
            {d.occurrence && <span style={{ fontSize: "12px", color: statusColor }}>{d.occurrence}</span>}
          </div>

          {[
            { label: "Cliente", value: d.client },
            { label: "Transportadora", value: d.transport },
            { label: "Previsão de Entrega", value: d.eta },
            { label: "Valor do Frete", value: d.value },
            { label: "Motorista", value: d.driver },
            { label: "Placa", value: d.plate },
          ].map(item => (
            <div key={item.label} style={{
              background: "#fff", borderRadius: "12px", padding: "16px",
              marginBottom: "10px", display: "flex", justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <span style={{ fontSize: "13px", color: colors.gray }}>{item.label}</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: colors.dark }}>{item.value}</span>
            </div>
          ))}

          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            {d.status === "transporte" && (
              <>
                <button style={{
                  flex: 1, background: colors.green, color: "#fff", border: "none",
                  borderRadius: "12px", padding: "14px", fontSize: "13px",
                  fontWeight: "600", fontFamily: "'Poppins', sans-serif", cursor: "pointer",
                }}>✓ Registrar Entrega</button>
                <button style={{
                  flex: 1, background: "#fff", color: "#f39c12",
                  border: `2px solid #f39c12`,
                  borderRadius: "12px", padding: "14px", fontSize: "13px",
                  fontWeight: "600", fontFamily: "'Poppins', sans-serif", cursor: "pointer",
                }}>⚠ Ocorrência</button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ background: colors.dark, padding: "56px 20px 20px" }}>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: "700", margin: "0 0 16px" }}>Entregas</h2>
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              background: activeFilter === f ? colors.green : "rgba(255,255,255,0.1)",
              color: "#fff", border: "none", borderRadius: "20px",
              padding: "8px 16px", fontSize: "12px", fontWeight: "600",
              fontFamily: "'Poppins', sans-serif", cursor: "pointer",
              whiteSpace: "nowrap", textTransform: "capitalize",
            }}>
              {f === "todos" ? "Todos" : statusLabels[f] || f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "16px 16px 80px" }}>
        {filtered.map(d => (
          <button key={d.id} onClick={() => setSelectedDelivery(d)} style={{
            background: "#fff", borderRadius: "16px", padding: "16px 18px",
            marginBottom: "10px", width: "100%", border: "none",
            cursor: "pointer", textAlign: "left", display: "flex",
            alignItems: "center", gap: "14px",
            borderLeft: `4px solid ${statusColors[d.status]}`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "700", color: colors.dark, fontFamily: "'Poppins', sans-serif" }}>{d.id}</p>
                <span style={{
                  background: `${statusColors[d.status]}15`, color: statusColors[d.status],
                  borderRadius: "8px", padding: "3px 10px", fontSize: "11px", fontWeight: "600",
                }}>{statusLabels[d.status]}</span>
              </div>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: colors.gray, fontFamily: "'Poppins', sans-serif" }}>{d.client}</p>
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <span style={{ fontSize: "11px", color: colors.gray }}>🚚 {d.transport}</span>
                <span style={{ fontSize: "11px", color: colors.gray }}>📅 {d.eta}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── REPORTS SCREEN ───────────────────────────────────────────────────────────
function RelatoriosScreen() {
  const charts = [
    { label: "Entregas no Prazo", value: "87%", color: colors.green, icon: "⏱", bar: 0.87 },
    { label: "Custo de Frete / Mês", value: "R$24.8k", color: colors.blue, icon: "💰", bar: 0.62 },
    { label: "Índice de Ocorrências", value: "5.2%", color: "#f39c12", icon: "⚠️", bar: 0.052 },
    { label: "Índice de Sinistros", value: "1.4%", color: "#e74c3c", icon: "🚨", bar: 0.014 },
  ];

  const tempos = [
    { label: "Tempo médio Oficina", value: "2.3 dias" },
    { label: "Tempo médio Embalagem", value: "1.1 dias" },
    { label: "Tempo médio Separação", value: "0.8 dias" },
  ];

  const occurrenceReasons = [
    { label: "Avaria", count: 12, pct: 0.45 },
    { label: "Atraso", count: 8, pct: 0.30 },
    { label: "Cliente ausente", count: 4, pct: 0.15 },
    { label: "Outros", count: 3, pct: 0.10 },
  ];

  return (
    <div style={{ flex: 1, overflow: "auto", padding: "0 0 80px" }}>
      <div style={{ background: colors.dark, padding: "56px 20px 24px" }}>
        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: "700", margin: 0 }}>Relatórios</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: "4px 0 0" }}>Março 2026</p>
      </div>

      <div style={{ padding: "20px" }}>
        {/* KPI Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          {charts.map(c => (
            <div key={c.label} style={{
              background: "#fff", borderRadius: "16px", padding: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <span style={{ fontSize: "20px" }}>{c.icon}</span>
              <p style={{ fontSize: "22px", fontWeight: "700", color: c.color, margin: "8px 0 2px" }}>{c.value}</p>
              <p style={{ fontSize: "11px", color: colors.gray, margin: 0, lineHeight: "1.3" }}>{c.label}</p>
              <div style={{ background: "rgba(0,0,0,0.06)", borderRadius: "4px", height: "4px", marginTop: "10px" }}>
                <div style={{ background: c.color, height: "100%", borderRadius: "4px", width: `${c.bar * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tempo médio */}
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: colors.dark, margin: "0 0 12px" }}>Tempos Médios</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {tempos.map(t => (
            <div key={t.label} style={{
              background: "#fff", borderRadius: "14px", padding: "16px 20px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}>
              <span style={{ fontSize: "14px", color: colors.dark }}>{t.label}</span>
              <span style={{ fontSize: "15px", fontWeight: "700", color: colors.blue }}>{t.value}</span>
            </div>
          ))}
        </div>

        {/* Ocorrências */}
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: colors.dark, margin: "0 0 12px" }}>Motivos de Ocorrências</h3>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {occurrenceReasons.map(o => (
            <div key={o.label} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "13px", color: colors.dark }}>{o.label}</span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#f39c12" }}>{o.count}</span>
              </div>
              <div style={{ background: "rgba(0,0,0,0.06)", borderRadius: "4px", height: "6px" }}>
                <div style={{ background: "#f39c12", height: "100%", borderRadius: "4px", width: `${o.pct * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PROFILE SCREEN ───────────────────────────────────────────────────────────
function PerfilScreen({ userType, onLogout }) {
  const userInfo = {
    admin: { name: "Administrador", email: "admin@nilfisk.com", role: "Administrador" },
    entrada: { name: "Equipe Pedidos", email: "pedidos@nilfisk.com", role: "Entrada de Pedido" },
    logistica: { name: "Equipe Logística", email: "logistica@nilfisk.com", role: "Logística" },
  }[userType];

  const menuItems = [
    { icon: "👥", label: "Gerenciar Usuários", admin: true },
    { icon: "🏢", label: "Clientes Cadastrados", admin: true },
    { icon: "🚛", label: "Transportadoras", admin: true },
    { icon: "🔒", label: "Alterar Senha", admin: false },
    { icon: "🔔", label: "Notificações", admin: false },
    { icon: "📱", label: "Sobre o App", admin: false },
  ];

  return (
    <div style={{ flex: 1, overflow: "auto", padding: "0 0 80px" }}>
      <div style={{
        background: `linear-gradient(135deg, ${colors.dark} 0%, #1e2a3a 100%)`,
        padding: "56px 24px 32px", display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{
          width: "72px", height: "72px", borderRadius: "50%",
          background: colors.green, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "28px", marginBottom: "14px",
          boxShadow: "0 4px 16px rgba(56,198,130,0.4)",
        }}>👤</div>
        <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: "700", margin: 0 }}>{userInfo.name}</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: "4px 0 0" }}>{userInfo.email}</p>
        <span style={{
          background: `${colors.green}25`, color: colors.green,
          borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: "600",
          marginTop: "12px",
        }}>{userInfo.role}</span>
      </div>

      <div style={{ padding: "20px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {menuItems.filter(m => !m.admin || userType === "admin").map((item, idx, arr) => (
            <button key={item.label} style={{
              width: "100%", background: "none", border: "none",
              borderBottom: idx < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px",
              cursor: "pointer", textAlign: "left",
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{ flex: 1, fontSize: "14px", fontFamily: "'Poppins', sans-serif", color: colors.dark }}>{item.label}</span>
              <span style={{ color: colors.gray }}>›</span>
            </button>
          ))}
        </div>

        <button onClick={onLogout} style={{
          width: "100%", background: "#fff", border: `2px solid #e74c3c`,
          borderRadius: "14px", padding: "16px", fontSize: "14px",
          fontWeight: "600", color: "#e74c3c", fontFamily: "'Poppins', sans-serif",
          cursor: "pointer", marginTop: "16px",
        }}>
          Sair da conta
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [activeTab, setActiveTab] = useState("home");
  const [userType, setUserType] = useState("admin"); // admin | entrada | logistica
  const [showNewProcess, setShowNewProcess] = useState(false);

  const handleLogin = () => {
    setScreen("main");
    setActiveTab("home");
  };

  const handleLogout = () => {
    setScreen("welcome");
    setShowNewProcess(false);
  };

  const renderContent = () => {
    if (showNewProcess) {
      return <NewProcessFlow onBack={() => setShowNewProcess(false)} />;
    }
    switch (activeTab) {
      case "home": return <HomeScreen userType={userType} />;
      case "entregas": return <EntregasScreen />;
      case "relatorios": return <RelatoriosScreen />;
      case "perfil": return <PerfilScreen userType={userType} onLogout={handleLogout} />;
      default: return <HomeScreen userType={userType} />;
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={styles.app}>
        {/* User type switcher for demo */}
        <div style={{
          position: "fixed", top: "16px", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "8px", background: "rgba(0,0,0,0.8)",
          borderRadius: "20px", padding: "8px", zIndex: 9999,
        }}>
          {["admin", "entrada", "logistica"].map(t => (
            <button key={t} onClick={() => setUserType(t)} style={{
              background: userType === t ? colors.green : "transparent",
              color: "#fff", border: "none", borderRadius: "12px",
              padding: "6px 14px", fontSize: "11px", fontWeight: "600",
              fontFamily: "'Poppins', sans-serif", cursor: "pointer",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        <div style={styles.phone}>
          {screen === "welcome" && <WelcomeScreen onEnter={() => setScreen("login")} />}
          {screen === "login" && <LoginScreen onLogin={handleLogin} />}
          {screen === "main" && (
            <>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
                {renderContent()}
                {!showNewProcess && (
                  <FAB onClick={() => setShowNewProcess(true)} />
                )}
              </div>
              {!showNewProcess && (
                <BottomNav active={activeTab} onChange={setActiveTab} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
